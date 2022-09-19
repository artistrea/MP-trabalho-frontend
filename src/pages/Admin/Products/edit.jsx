import { useLocation } from "react-router-dom";
import { ProductForm } from "../../../components/ProductForm";

export const EditProductPage = () => {
    const { state } = useLocation();
    const { product } = state;
    console.log(state)
    return <ProductForm startingProduct={product} update/>;
};

