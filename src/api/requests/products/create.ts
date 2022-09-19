import { api } from "../..";
import { product } from "../../validations/product";

export default async function apiCreateProduct(product: product) {
    return api.post(`/products/create`, product);
}

