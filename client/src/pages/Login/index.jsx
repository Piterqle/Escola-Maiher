import { useState } from "react";
import logo from '../../pictures/Logo.png'
import './style.css'
import axios from "axios";

function Login() {
    const url = window.location.href;
    // Cálculo das datas mínima e máxima para o campo de data de nascimento
    const minAge = 10;
    const maxAge = 100;
    const currentYear = new Date().getFullYear();
    const minDate = new Date(currentYear - maxAge, 0, 1).toISOString().split('T')[0];
    const maxDate = new Date(currentYear - minAge, 11, 31).toISOString().split('T')[0];

    // Estados para os campos do formulário de cadastro
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleCadastro = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', email);
        formData.append('senha', senha);    
        formData.append('data_nascimento', dataNascimento);
        console.log('Dados do formulário:', { nome, email, senha, dataNascimento });
        try {
            const response = await axios.post(`/api/usuarios/cadastro`, formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log('Resposta do servidor:', response.data);
            if  (response.data.type === 'sucess') {
                alert('Cadastrado com Sucesso! Sua matrícula é: ' + response.data.id);
                cookieStore.set('matricula', response.data.id);
                setNome('');
                setEmail('');
                setSenha('');
                setDataNascimento('');
                setIsFlipped(false);
                return;
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    }

    // Estado para controlar a rotação do cartão
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <>
            <div className="login-card-container">
                <div className={`login-card ${isFlipped ? "flipped" : ""}`} id="card">
                    <div className="face front" data-aos="zoom-in" data-aos-duration="800">
                        <div className="text-center">
                            <img src={logo} alt="logo" className="img-fluid" style={{ width: "150px", pointerEvents: 'none' }} />
                        </div>
                        <hr />
                        <h1 className="mb-4">Login</h1>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="matriculaLogin" placeholder="Matricula" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="senhaLogin" placeholder="Senha" required />
                            </div>
                            <button type="submit" className="btn btn-warning w-100 btn_entrar   ">Entrar</button>
                        </form>
                        <div class="text-center mt-3">
                            <button type="button" id="btn_singUp" className="btn btn-link" onClick={handleFlip} >Cadastrar-se</button>
                        </div>
                    </div>
                    <div className="face back">
                        <div className="text-center">
                            <img src={logo} alt="logo" className="img-fluid" style={{ width: "150px", pointerEvents: 'none' }} />
                        </div>
                        <hr />
                        <h1 className="mb-3">Cadastro</h1>
                        <hr />
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="nomeCadastro" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome Completo" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="emailCadastro" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="senhaCadastro" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Senha" required />
                            </div>
                            <div className="mb-3">
                                <input type="date" className="form-control" id="dataCadastro" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} placeholder="00/00/0000" max={maxDate} min={minDate} />
                            </div>
                            <button type="button" className="btn btn-warning w-100 btn_entrar" onClick={handleCadastro}>Cadastrar</button>
                        </form>
                        <div class="text-center mt-3">
                            <button type="button" id="btn_singUp" class="btn btn-link" onClick={handleFlip} >Concectar-se</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login