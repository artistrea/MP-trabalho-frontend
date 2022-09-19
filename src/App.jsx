import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { Navbar } from "./components/Navbar";

const upperLinkHomePage = [
  { title: "backoffice", href: "/backoffice", active: false },
  { title: "refeições", href: "/", active: false },
  { title: "meus pedidos", href: "/", active: false },
  { title: "entrar", href: "/login", active: true },
  ];
  
  const homepageSubtext =
  "Monte prato, escolha sua salada,molho, prato principal, guarnição e bebida.";
  const defaultHeader = "Crie o pedido";

function App() {
  return (
    <BrowserRouter>
    
    <Navbar
        />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
