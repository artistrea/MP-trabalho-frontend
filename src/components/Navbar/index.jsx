import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useUserContext } from '../../contexts/useUserContext';

export function Navbar() {
    const {user, logout} = useUserContext();

    return (
        <nav className='nav-main'>
            <ul>
                {!user &&
                <>
                    <li>
                        <NavLink to="/">Cardápio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact_us">Deixe uma mensagem</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">Para funcionários</NavLink>
                    </li>
                </>
                }
            </ul>

            {
            user?.user_type >= 2 &&
            <ul>
                <>
                    <li>
                        <NavLink to="/admin">Admin dashboard</NavLink>
                    </li>
                </>
            </ul>
            }

            {
            user?.user_type >= 1 &&
            <ul>
                <>
                    <li>
                        <NavLink to="/orders/create">Criar pedido</NavLink>
                    </li>
                </>
            </ul>
            }

            {
            user?.user_type >= 0 &&
            <ul>
                <>
                    <li>
                        <NavLink to="/orders">Pedidos</NavLink>
                    </li>
                </>

            
                <li onClick={() => logout()} style={{cursor: "pointer"}}>
                    Sair
                </li>
                
            </ul>
            }
        </nav>
    )
}
