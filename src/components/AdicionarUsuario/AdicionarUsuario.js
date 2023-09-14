import React, { useState } from 'react'
import './AdicionarUsuario.css'

function AdicionarUsuario(props){

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [profissao, setProfissao] = useState('')
    const [competencias, setCompetencias] = useState('')
    const [formacao, setFormacao] = useState('')
    const [idiomas, setIdiomas] = useState('')
    const [salario, setSalario] = useState('')
    let [avatar, setAvatar] = useState('')

    const limpaTudo = () => {
        return(
            setNome(''),
            setSobrenome(''),
            setEmail(''),
            setProfissao(''),
            setCompetencias(''),
            setFormacao(''),
            setIdiomas(''),
            setSalario(''),
            setAvatar('')
        )
    }

    const onSubmitMetodo = (e) => {
        e.preventDefault()

        const usuario = { nome, sobrenome, email, profissao, competencias, formacao, idiomas, salario, avatar}

        let url ='https://reqres.in/api/users?page=2'
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        })
        .then( resposta => resposta.json())
        .then( dados => {
            document.querySelectorAll('.UsuarioFoto img').forEach( img => console.log(img))
            limpaTudo()
            props.adicionarUsuario(dados)
        })
    }


    return(
        <div>
            <form onSubmit={onSubmitMetodo}>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='nome'>Nome: </label>
                    </div>
                    <input
                        name='nome'
                        className='inputNome'
                        id='nome'
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='sobrenome'>Sobrenome: </label>
                    </div>
                    <input
                        name='sobrenome'
                        className=''
                        id='sobrenome'
                        value={sobrenome}
                        onChange={e => setSobrenome(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='email'>Email: </label>
                    </div>
                    <input
                        name='email'
                        className=''
                        id='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='profissao'>Profissao: </label>
                    </div>
                    <input
                        name='profissao'
                        className=''
                        id='profissao'
                        value={profissao}
                        onChange={e => setProfissao(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='competencias'>Competencias: </label>
                    </div>
                    <input
                        name='competencias'
                        className=''
                        id='competencias'
                        value={competencias}
                        onChange={e => setCompetencias(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='formacao'>Formacao: </label>
                    </div>
                    <input
                        name='formacao'
                        className=''
                        id='formacao'
                        value={formacao}
                        onChange={e => setFormacao(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='idiomas'>Idiomas: </label>
                    </div>
                    <input
                        name='idiomas'
                        className=''
                        id='idiomas'
                        value={idiomas}
                        onChange={e => setIdiomas(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='salario'>Salário: </label>
                    </div>
                    <input
                        name='salario'
                        className=''
                        id='salario'
                        value={salario}
                        onChange={e => setSalario(e.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='label-group'>
                        <label htmlFor='avatar'>Foto do Perfil: </label>
                    </div>
                    <input
                        type='file'
                        name='avatar'
                        className=''
                        id='avatar'
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Adicionar Usuário</button>
                </div>
            </form>
        </div>
    )
}

export default AdicionarUsuario
