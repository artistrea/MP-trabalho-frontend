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

export default function HomePage() {
    const finalPrice = 0;
    
    const [quantity, setQuantity] = useState(1);

    const MiojoCategory = [{name:"Miojo de Beijinho", description:"Um delicioso miojo de beijinho para você saborear em seu lar...", value:2.00, img:nissinBeijinho, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Chapagetti", description:"Um delicioso miojo coreano...", value:8.00, img:chapagetti, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Miojo de Chocolate",description:"Um delicioso miojo de chocolate para você saborear em seu lar...", value:2.50, img:nissinChocolate, quantity:{quantity}, setQuantity:{setQuantity}}, {name:"Cup Noodles de Yakissoba", description:"Um delicioso lamen de copo de sabor Yakissoba", value:4.50,img:yakissobaCupNoodles, quantity:{quantity}, setQuantity:{setQuantity}, id: 1}];

    const [orders, setOrders] = useState([])

    return (
    <div className="homepage-body">

        <CategoryContainer Category="Miojo">
            {MiojoCategory.map((product) => 
                <CardPrincipal 
                    key={product.id}
                    name={product.name} 
                    value={product.value} 
                    img={product.img} 
                    description={product.description}
                    addOrder={() => 
                    {
                        setOrders(prevOr => [...prevOr, product])
                    console.log(orders)
                }}
                />)
            }
        </CategoryContainer>
        
        <OrderContainer Category="Pedidos">
            {orders.map((product) => <OrderCard
                        key={product.id}
                        cardImage={product.cardImage} 
                        mealName={product.mealName}
                        unityPrice={product.value}
                        quantity={product.quantity}
                        setQuantity={product.setQuantity}/>)}
        </OrderContainer>
        
        <br className="br-homepage" />
        <div className="show-final-price">
        <h1 className="h1-homepage">Preço total do pedido:</h1>
        <h1 className="h1-final-price">{numberFormat(finalPrice)}</h1>
        </div>
        <div className="logged-finish-and-pay">
        <Button className="bordaVerde">Fazer o pedido</Button>
        </div>
        <br className="br-homepage" />
    </div>
    );
}
