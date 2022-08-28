import { Link } from "react-router-dom";
import "./style.scss"

export const NavBar = () => {
	return <nav>
		<ul>
			<li>
				<Link to="/">Cardapio</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</ul>
		</nav>;
};
