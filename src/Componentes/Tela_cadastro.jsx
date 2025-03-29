import { useState } from 'react';
import styles from './Tela_cadastro.module.css'
import { useNavigate } from 'react-router-dom';


const Tela_cadastro = () => {
    const [senha, useSenha] = useState("");
    const [confirmarSenha, useConfir] = useState("");
    const [email, useEmail] = useState("");

    console.log(senha);

    const confirmar_Dois = () => {
        if (senha != confirmarSenha){
            alert ("As senhas não são iguais")
        }
        if(senha.length < 8){
            alert ("A senha deve ter no mínimo 8 caracteres")
        }
    }
    const emailVaz = () => {
        if (email === ""){
            alert ("O email não pode ser vazio")
        }
    }
    const vazio = () => {
        if (senha === "" || confirmarSenha === "" || email === ""){
            alert ("Os campos não podem ser vazios")
        }
    }
    const cadastro = () => {
        if (senha != confirmarSenha){
            alert ("As senhas não são iguais")
        }
        if(senha.length < 8){
            alert ("A senha deve ter no mínimo 8 caracteres")
        }
        if (email === ""){
            alert ("O email não pode ser vazio")
        }
        if (senha === "" || confirmarSenha === "" || email === ""){
            alert ("Os campos não podem ser vazios")
        }
    } 

    const navigate = useNavigate();
    const voltar = () => {
        navigate('/')
    }

  return (
    <div className={styles.TelaCadastro}>
        <h1>Cadastro</h1>
        <input type="text" placeholder='Email' onChange={(e) => useEmail(e.target.value) }/>

        <input type="password" placeholder='Senha' onChange={(e) => useSenha(e.target.value)}/>

        <input type="password" placeholder='Confirmar Senha' onChange={(e) => useConfir(e.target.vaule)}/>

        <button onClick={cadastro}>Cdastrar</button>
        <button onClick={voltar}>Voltar</button>
    </div>
    
  )
}

export default Tela_cadastro