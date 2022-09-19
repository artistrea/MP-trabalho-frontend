import { FC } from "react";
import useProductsIndex from "../../api/utils/useProductsIndex";
import { product } from "../../api/validations/product";
import "./styles.scss";

const ProductCard: FC<{ product: product }> = ({ product }) => {
    const outOfStock = product.quantity_in_stock === 0;
    return (
        <li style={{ marginBlock: "3rem" }}>
            <details>
                <summary>
                    <span
                        style={{
                            fontSize: "2rem",
                            textDecoration: outOfStock ? "line-through" : "",
                        }}
                    >
                        {product.name}
                    </span>
                    <small>{outOfStock && " Sem estoque"}</small>
                </summary>
                <small>R$ {(product.price_in_cents / 100.0).toFixed(2)}</small>
                <p>{product.description}</p>
            </details>
        </li>
    );
};

const RestaurantMenu = () => {
    const products = useProductsIndex();

    return (
        <section style={{ display: "flex", flexDirection: "column" }}>
            <h1>Cardápio da Casa</h1>
            <ul style={{ listStyle: "none" }}>
                {products?.map((product) => (
                    <ProductCard product={product} />
                ))}
            </ul>
        </section>
    );
};

export default RestaurantMenu;

