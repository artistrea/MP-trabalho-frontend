import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/Navbar";
import AppRoutes from "./routes";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<AppRoutes />
		</BrowserRouter>
	);
}

export default App;
