import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import apiDeleteProduct from "../../../api/requests/products/delete";
import useProductsIndex from "../../../api/utils/useProductsIndex";
import { product } from "../../../api/validations/product";

export const AdminProducts = () => {
    const [updateProducts, setUpdateProducts] = useState(0);

    const products = useProductsIndex(updateProducts);

    const handleDelete = (id: number) => {
        if (!window.confirm("Deseja deletar o produto?")) return;
        apiDeleteProduct(id)
            .then((_res) => {
                alert("Deletado com sucesso");
                setUpdateProducts((s) => s + 1);
            })
            .catch(alert);
    };

    return (
        <table>
            <tr>
                <th style={{ paddingInline: "5rem" }}>Nome</th>
                <th style={{ paddingInline: "5rem" }}>Preço</th>
                <th style={{ paddingInline: "5rem" }}>Estoque</th>
                <th style={{ paddingInline: "10rem" }}>Ações</th>
            </tr>
            {products?.map((pr) => (
                <tr>
                    <td style={{ paddingInline: "5rem" }}>{pr.name}</td>
                    <td style={{ paddingInline: "5rem" }}>
                        {(pr.price_in_cents / 100.0).toFixed(2)}
                    </td>
                    <td style={{ paddingInline: "5rem" }}>
                        {pr.quantity_in_stock}
                    </td>
                    <td style={{ paddingInline: "5rem" }}>
                        <Link
                            to="/admin/products/edit"
                            state={pr}
                            style={{ display: "contents" }}
                        >
                            <button style={{ marginInline: "1rem" }}>
                                Editar
                            </button>
                        </Link>
                        <button
                            type="submit"
                            onClick={() => pr.id && handleDelete(pr.id)}
                        >
                            Deletar
                        </button>
                    </td>
                </tr>
            ))}
        </table>
    );
};

