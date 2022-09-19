import { Link, Outlet } from "react-router-dom"

export const Admin = () => {
  return (
    <div className="admin-container" style={{display: "flex", }}>
    <nav style={{padding: "5rem"}}>
      <ul>
        <li>
          <Link to="/admin/products">Produtos e estoque</Link>
        </li>
        <li>
          <Link to="/admin/products/create">Criar produto</Link>
        </li>
        <li>
          <Link to="./">Mesas</Link>
        </li>
        <li>
          <Link to="./">Criar mesa</Link>
        </li>
        <li>
          <Link to="./">Relatórios de estoque</Link>
        <li>
          <Link to="./">Relatórios de consumo</Link>
        </li>
        </li>
      </ul>
    </nav>
    <Outlet />
    </div>
  )
}
