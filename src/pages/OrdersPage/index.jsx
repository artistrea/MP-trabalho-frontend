import { FC, useEffect, useState } from "react";
import { api } from "../../api";
import "./styles.scss";
import { ProductCard } from "../RestaurantMenu";

const OrderCard = ({ order }) => {
    const FinishOrder = (order) => {
        api.patch(`orders/update/${order.id}`, {
            order: {status:  2}
        })
        .then((response) => {
            alert("O pedido está pronto!");
        })
        .catch((e) => {
            alert(e)
        });
    }

    return (
        <li style={{ marginBlock: "3rem" }}>
            <details >
                <summary >
                    <span style={{ fontSize: "3rem", marginRight: "2rem" }}>Mesa número {order.client.table_id}</span>
                    <button onClick={ () => FinishOrder(order)}> Finalizar pedido</button>
                </summary>
                {order.products.map((product) => (
                    <>
                        <ProductCard product={product} />
                    </>
                ))

                }
                <h2 style={{ marginLeft: "2rem" }}>Status: {order.status}</h2>
            </details>
        </li>
    );
};

const RestaurantOrders = () => {
    const [orders, setOrders] = useState();

    useEffect(() => {
        api.get('orders/index')
        .then(response => {
            console.log(response.data)
            setOrders(response.data)
        })
        .catch((e) => setOrders([]))  
    }, [])

    
    
    return (
        <section style={{ display: "flex", flexDirection: "column" }}>
            <h1>Pedidos</h1>
            <ul style={{ listStyle: "none" }}>
                {orders?.map((order) => (
                    <>
                        <OrderCard order={order} />
                    </>
                    
                ))}
            </ul>
        </section>
    );
};

export default RestaurantOrders;

