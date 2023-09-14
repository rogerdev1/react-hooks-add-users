import React, { Component } from 'react'
import './App.css';
import Usuarios from './components/Usuarios/Usuarios';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      usuario: {
        nome: '',
        sobrenome: '',
        email: '',
        avatar: '',
      }
    }
  }

  render(){
    return (
    <div className="App">
      <Usuarios/>
    </div>
    )
  }
}

export default App;
