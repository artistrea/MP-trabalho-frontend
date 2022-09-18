import './styles.css';
import React from 'react';
import OrderCard from "../OrderCard";

export default function OrderContainer({children}) {

    return (
        <div>
            <div className="OrderContainer">
                <h1 className="h1-homepage">Finalizou o seu prato?</h1>
                <h2 className="h2-homepage-container">Confira os itens pedidos antes de finalizar o pedido.</h2>
                <div className="home-finish-order-row">
                    {children}
                </div>
            </div>
            <hr/>
        </div>
    )}