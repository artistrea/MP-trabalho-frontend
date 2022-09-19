import { useState } from "react";
import "./styles.css";
import CategoryContainer from "../../components/CategoryContainer";
import Button from "../../components/Button";
import numberFormat from "../../utils/numberFormat";
import OrderContainer from "../../components/OrdersContainer";
import OrderCard from "../../components/OrderCard";
import CardPrincipal from "../../components/CardPrincipal";

import chapagetti from '../../images/chapagetti.jpg';
import nissinBeijinho from '../../images/nissinBeijinho.jpg';
import nissinChocolate from '../../images/nissinChocolate.jpg';
import yakissobaCupNoodles from '../../images/yakissobaCupNoodles.jpg';
import { Navbar } from "../../components/Navbar";
import { Link } from "react-router-dom";

export default function HomePage() {
    const finalPrice = 0;
    
    const [quantity, setQuantity] = useState(0);

    const MiojoCategory = [{name:"Miojo de Beijinho", description:"Um delicioso miojo de beijinho para você saborear em seu lar...", value:2.00, img:nissinBeijinho, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Chapagetti", description:"Um delicioso miojo coreano...", value:8.00, img:chapagetti, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Miojo de Chocolate",description:"Um delicioso miojo de chocolate para você saborear em seu lar...", value:2.50, img:nissinChocolate, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Cup Noodles de Yakissoba", description:"Um delicioso lamen de copo de sabor Yakissoba", value:4.50,img:yakissobaCupNoodles, quantity:{quantity}, setQuantity:{setQuantity}}];

    const Orders = [];

    return (
    <div className="homepage-body">

        <CategoryContainer Category="Miojo">
            {MiojoCategory.map((product) => 
            <CardPrincipal 
                name={product.name} 
                value={product.value} 
                img={product.img} 
                description={product.description}
                addOrder={() => Orders.push(product)}/>)}
        </CategoryContainer>
        
        <br className="br-homepage" />
        <div className="show-final-price">
        <h1 className="h1-homepage">Preço total do pedido:</h1>
        <h1 className="h1-final-price">{numberFormat(finalPrice)}</h1>
        </div>
        <br className="br-homepage" />
    </div>
    );
}
