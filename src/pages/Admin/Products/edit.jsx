import { useLocation } from "react-router-dom";
import { ProductForm } from "../../../components/ProductForm";

export const EditProductPage = () => {
    const { state } = useLocation();
    const { product } = state;
    return <ProductForm startingProduct={state} update/>;
};

