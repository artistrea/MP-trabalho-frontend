import { useState } from "react";
import "./styles.scss";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function LoginPage() {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="login-page">
            <Link to={'/'}><FiArrowLeft className="icon-return" /></Link>
            <div className="login-form">
                <form>
                    <h1 className="login-form__title">Login</h1>
                    <label>
                        <p>Usuário</p>
                        <input className="login-form__input"
                        type="email" 
                        placeholder ='Email' 
                        value={email}
                        onChange ={(e) => setEmail(e.target.value)}
                        required
                        />
                    </label>
                    <label>
                        <p>Senha</p>
                        <input className="login-form__input"
                        type="password" 
                        placeholder='Senha'
                        value={password}
                        onChange ={(e) => setPassword(e.target.value)}
                        required
                        />
                    </label>
                    <div>
                        <button className="login-form__button" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}