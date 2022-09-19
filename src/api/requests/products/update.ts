import { api } from "../..";
import { product } from "../../validations/product";

export default async function apiUpdateProduct(product: product) {
    return api.patch(`/products/update/${product.id}`, product);
}

