import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiCreateProduct from "../../api/requests/products/create";
import apiUpdateProduct from "../../api/requests/products/update";
import Input from "../Input";

export const ProductForm = ({ startingProduct, update }) => {
    const [product, setProduct] = useState(startingProduct || {});

    const navigate = useNavigate()
    
    const handleCreateProduct = () => {
        apiCreateProduct(product)
            .then(() => {alert("Criado com sucesso"); navigate("/admin/products")})
            .catch(alert)
    };
    const handleUpdateProduct = () => {
        apiUpdateProduct(product)
            .then(() => {alert("Editado com sucesso"); navigate("/admin/products")})
            .catch(alert)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (update) handleUpdateProduct();
        else handleCreateProduct();
    };

    const handleChange = (e) => {
        setProduct(p => {return {...p, [e.target.id]: e.target.value } })
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome do produto</label>
        <Input id="name" placeholder="Nome" onChange={handleChange} value={product.name} />
        <label htmlFor="name">Descrição</label>
        <textarea rows={5} id="description" placeholder="Descrição" onChange={handleChange} value={product.description} />
        <label htmlFor="name">Estoque</label>
        <Input id="quantity_in_stock" placeholder="Quantidade em estoque" onChange={handleChange} value={product.quantity_in_stock} />
        <label htmlFor="name">Tempo de preparo (em minutos)</label>
        <Input id="prep_time_in_minutes" placeholder="Tempo médio de preparar" onChange={handleChange} value={product.prep_time_in_minutes} />
        <label htmlFor="name">Preço (em centavos)</label>
        <Input id="price_in_cents" placeholder="Preço em centavos" onChange={handleChange} value={product.price_in_cents} />
        <button type="submit" style={{marginInline: "auto"}}>
            {update ? "Editar" : "Criar"}
        </button>
    </form>;
};

