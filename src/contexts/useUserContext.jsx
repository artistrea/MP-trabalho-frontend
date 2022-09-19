import { createContext, useContext, useState } from "react";
import { api } from "../api";
import apiLogin from "../api/requests/users/login";

const UserContext = createContext({user: {email: "", authentication_token: "", user_type: 0}, login: (user) => !!user, logout: () => {}});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = async (user) => {
            apiLogin(user)
                .then((res) => {
                setUser(res.data)
                alert("Logado com sucesso")
                api.defaults.headers.common[`X-User-Token`] =   res.data.authentication_token;
                api.defaults.headers.common[`X-User-Email`] =   res.data.email;
                return true;
            })  .catch( (e) => {
                switch (e.response.status) {
                    case 404:
                        alert("Email ou senha incorreto.");
                        break;
                    case 401:
                        alert("Email ou senha incorreto.");
                        break;

                    default:
                        alert(e.message);
                        break;
                }
                return false;
        })
    };

    const logout = async () => {
        if (window.confirm("Deseja sair da sua conta?")) {
            setUser(null)
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
};

export { UserProvider, useUserContext };

