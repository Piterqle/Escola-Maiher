import { useState } from "react";
import logo from '../../pictures/Logo.png'
import './style.css'

function Login() {

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
                            <button type="button" id="btn_singUp" class="btn btn-link" onClick={handleFlip} >Cadastrar-se</button>
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
                                <input type="text" className="form-control" id="nomeCadastro" placeholder="Nome Completo" required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="emailCadastro" placeholder="Matrícula" required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="senhaCadastro" placeholder="Senha" required />
                            </div>
                            <div className="mb-3">
                                <input type="date" className="form-control" id="dataCadastro" />
                            </div>
                            <button type="submit" className="btn btn-warning w-100 btn_entrar">Cadastrar</button>
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