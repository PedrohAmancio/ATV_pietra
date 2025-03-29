import Login from '../../segundo/src/pages/Login'
import './App.css'
import Tela_cadastro from './Componentes/Tela_cadastro'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element = {<Login/>}/> 
      <Route path='/cadastro' element = {<Tela_cadastro/>}/>
      </Routes>
      </Router>
  )
}

export default App
