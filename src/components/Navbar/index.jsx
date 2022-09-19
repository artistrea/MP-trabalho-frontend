import './styles.scss';
import { NavLink } from 'react-router-dom';

export function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Cardápio</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Cardápio</NavLink>
                </li>
            </ul>
        </nav>
    )
}
