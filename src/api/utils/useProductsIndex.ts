import { useEffect, useState } from "react";
import apiGetProductsIndex from "../requests/products";
import { product, productSchema } from "../validations/product";

export default function useProductsIndex() {
    const [products, setProducts] = useState<null | product[]>(null);

    useEffect(() => {
        apiGetProductsIndex().then((res) => {
            const data = productSchema.strict().array().parse(res.data);
            setProducts(data);
        });
    }, []);

    return products;
}

