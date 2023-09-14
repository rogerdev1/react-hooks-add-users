import React, { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import './DetalhesUsuario.css'
import ImgPerfil from '../Usuario/logo192.png'
import PageNotFound from '../PageNotFound/PageNotFound'


function DetalhesUsuario(){

    const { id } = useParams()

    const [usuario, setUsuario] = useState({})

    useEffect(() => {

        let url = `https://reqres.in/api/users/${id}`
        fetch(url)
        .then(resposta => resposta.json())
        .then(dados => {
            if(dados.data){
                setUsuario({
                    id: dados.data.id,
                    nome: dados.data.first_name,
                    sobrenome: dados.data.last_name,
                    email: dados.data.email,
                    avatar: dados.data.avatar,
                    competencias: dados.data.competencias,
                    profissao: dados.data.profissao,
                    formacao: dados.data.formacao,
                    idiomas: dados.data.idiomas,
                    salario: dados.data.salario,
                })
            }

        })
    }, [id])

    const verificaAvatar = (avatar) => {
        if(!avatar){
            avatar = ImgPerfil
        }
        return avatar
    }

    const verificaDado = dado => {
        if(!dado){
            dado = 'Sem Dados'
        }
        return dado
    }

    if(usuario.nome !== undefined){
        return(
            <div className='DetalhesUsuario'>
                <div className='DetalhesUsuarioDados'>
                    <img src={verificaAvatar(usuario.avatar)} alt={`Avatar de ${usuario.nome}`} width='200px' />
                    <h4>ID: {id}</h4>
                    <h4>{verificaDado(usuario.nome)} {verificaDado(usuario.sobrenome)}</h4>
                </div>
                <div className='DetalhesUsuarioDadosFuncionais'>
                    <h2>{verificaDado(usuario.profissao)}</h2>
                    <h2>Competências: {verificaDado(usuario.competencias)}</h2>
                    <h2>Formação: {verificaDado(usuario.formacao)}</h2>
                    <h2>Idiomas: {verificaDado(usuario.idiomas)}</h2>
                    <h2>Salário: {verificaDado(usuario.salario)}</h2>
                </div>
            </div>
        )

    }

    return(
        <PageNotFound/>
    )

}

export default DetalhesUsuario
