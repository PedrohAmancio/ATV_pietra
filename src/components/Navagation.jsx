import { Link } from "react-router-dom"
import "./Navagation.css"

const Navagation = () => {
    return(
        <div className="layout">
            <button><Link to="/">Login</Link></button>
            <button><Link to="/cadastrar">Cadastrar</Link></button>
        </div>
    )
}

export default Navagation