import { api } from "../..";

export default async function apiGetProductsIndex() {
    return api.get("/products/index");
}

