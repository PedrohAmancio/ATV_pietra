import { useState } from "react"

const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const verificacao  = (e) => {
        e.preventDefault();

        if(email === "" || senha === ""){
            setEmail("");
            setSenha("");
            alert("Preencha todos os campos");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const usuarioEncontrado = users.find((user) => user.email === email);

        if(!usuarioEncontrado) {
            setEmail("");
            setSenha("");
            alert("Email não cadastrado!")
            return;
        }

        if(usuarioEncontrado.senha !== senha) {
            setEmail("");
            setSenha("");
            alert("Informações inválidas!")
            return;
        }

        alert("Login aceito!")
        
        setEmail("")
        setSenha("")
    }

    return(
        <>
            <h2>Login</h2>
            
            <input type="text" placeholder="Digite o email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>

            <button onClick={verificacao}>Entrar</button>
        </>
    )
}

export default Login