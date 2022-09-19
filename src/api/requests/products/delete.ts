import { api } from "../..";

export default async function apiDeleteProduct(id: number) {
    return api.delete(`/products/delete/${id}`);
}

