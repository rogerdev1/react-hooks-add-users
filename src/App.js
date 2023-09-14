import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css';
import Usuarios from './components/Usuarios/Usuarios';
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario'

function App() {


  return (
    <Router>
      <div className="App">
        <header>
          <div className='logoArea'>
            LOGO
          </div>
          <nav>
            <ul>
              <li>
                <Link to='/' >Inicio</Link>
              </li>
              <li>
                <Link to='/usuarios'>Usuários Cadastrados</Link>
              </li>
              <li>
                <Link to='/add'>Adicionar Usuários</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/usuarios/:id' element={<DetalhesUsuario />} />
            <Route path='/usuarios' element={<Usuarios />} exact />
            <Route path='/add' element={<AdicionarUsuario />} />
            <Route path='/' element={<Home />} exact />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App;
