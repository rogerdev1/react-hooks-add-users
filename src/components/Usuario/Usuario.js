import React from 'react'
import './Usuario.css'
import ImgChaves from './chaves.png'
import ImgPerfil from './logo192.png'

function Usuario(props){

    const verificaAvatar = (avatar) => {
        if(!avatar){
            avatar = ImgPerfil
        }

        return avatar
    }

    return(
        <div className='Usuario'>
            <div className='UsuarioFoto'>
                <img src={verificaAvatar(props.usuario.avatar)} alt='foto avatar'width='80px' />
            </div>
            <div className='UsuarioDados'>
                <h3>{props.usuario.nome} {props.usuario.sobrenome}</h3>
                <span><small>{props.usuario.email}</small></span>
            </div>
            <div className='divisor'>
                <img src={ImgChaves} alt='chaves' width='30px' />
            </div>
            <div className='UsuarioDadosFuncionais'>
                <h4>{props.usuario.profissao ? props.usuario.profissao : 'Profissão'}</h4>
                <span>
                    <small>Competencias:</small>
                    <small>{props.usuario.competencias ? props.usuario.competencias : 'Sem dados'}</small>
                </span>
                <span>
                    <small>Formação:</small>
                    <small>{props.usuario.formacao ? props.usuario.formacao : 'Sem dados'}</small>
                </span>
                <span>
                    <small>Idiomas:</small>
                    <small>{props.usuario.idiomas ? props.usuario.idiomas : 'Sem dados'}</small>
                </span>
                <span>
                    <small>Salário:</small>
                    <small>{props.usuario.salario ? props.usuario.salario : 'Sem dados'}</small>
                </span>
            </div>
            <div className='btnDelete'>
                <button onClick={props.removerUsuario}>X</button>
            </div>
        </div>
    )
}

export default Usuario
