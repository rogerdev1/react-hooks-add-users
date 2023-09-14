import React, { useState, useEffect } from 'react'

import Usuario from '../Usuario/Usuario'


function Usuarios() {

    const [usuarios, setUsuarios] = useState([])

    const removerUsuario = usuario => {
        if(window.confirm(`Tem certeza que deseja excluir ${usuario.nome} ${usuario.sobrenome}?` )){

            let url = `https://reqres.in/api/users/${usuario.id}`
            fetch(url, { method: 'DELETE'})
            .then( resposta => {
                if(resposta.ok){
                    setUsuarios( usuarios.filter( x => x.id !== usuario.id))
                }
            })

        }
    }

    useEffect(() => {
        let url = 'https://reqres.in/api/users?page=2'
        fetch(url)
            .then(resposta => resposta.json())
            .then(dados => {
                const usuarios = dados.data.map(usuario => {
                    return {
                        id: usuario.id,
                        nome: usuario.first_name,
                        sobrenome: usuario.last_name,
                        email: usuario.email,
                        avatar: usuario.avatar,
                    }
                })
                setUsuarios(usuarios)
            })
    }, [])

    return (
        <>

            {usuarios.map(usuario => {
                return (
                    <Usuario
                        key={usuario.id}
                        usuario={usuario}
                        removerUsuario={() => removerUsuario( usuario )}
                    />
                )
            })}
        </>
    )
}


export default Usuarios
