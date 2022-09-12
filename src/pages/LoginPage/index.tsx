import "./style.scss";
import image from "../../assets/imagem.jpeg";

export default function LoginPage() {
    return (
        <div className="login-page">
            <img src={image}/>
            <div className="login-form">
                <form>
                    <h1>Login</h1>
                    <label>
                        <p>Usuário</p>
                        <input type="text" />
                    </label>
                    <label>
                        <p>Senha</p>
                        <input type="password" />
                    </label>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}