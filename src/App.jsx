import './App.css'
import Tela_cadastro from './pages/Tela_cadastro'
import { Outlet } from 'react-router-dom'
import Navagation from './components/Navagation'


function App() {
  return (
    <div className="org">
      <div className='estilizacao'>
        <Outlet/>
        <Navagation/>
      </div>
    </div>
  )
}

export default App
