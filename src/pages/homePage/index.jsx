import { useState } from "react";
import "./styles.css";
import CategoryContainer from "../../components/CategoryContainer";
import Button from "../../components/Button";
import numberFormat from "../../utils/numberFormat";
import chapagetti from "../../images/chapagetti.jpg";
import nissinBeijinho from "../../images/nissinBeijinho.jpg";
import nissinChocolate from "../../images/nissinChocolate.jpg";
import yakissobaCupNoodles from "../../images/yakissobaCupNoodles.jpg";
import OrderContainer from "../../components/OrdersContainer";
import OrderCard from "../../components/OrderCard";
import CardPrincipal from "../../components/CardPrincipal";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [quantity, setQuantity] = useState(0);

  const MiojoCategory = [
    {
      name: "Miojo de Beijinho",
      description:
        "Um delicioso miojo de beijinho para você saborear em seu lar...",
      value: 2.0,
      img: nissinBeijinho,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      name: "Chapagetti",
      description: "Um delicioso miojo coreano...",
      value: 8.0,
      img: chapagetti,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      name: "Miojo de Chocolate",
      description:
        "Um delicioso miojo de chocolate para você saborear em seu lar...",
      value: 2.5,
      img: nissinChocolate,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      name: "Cup Noodles de Yakissoba",
      description: "Um delicioso lamen de copo de sabor Yakissoba",
      value: 4.5,
      img: yakissobaCupNoodles,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
  ];

  const Ordered = [
    {
      cardImage: nissinBeijinho,
      mealName: "Miojo de Beijinho",
      unityPrice: 2.0,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      cardImage: nissinBeijinho,
      mealName: "Miojo de Beijinho",
      unityPrice: 2.0,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      cardImage: nissinBeijinho,
      mealName: "Miojo de Beijinho",
      unityPrice: 2.0,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
    {
      cardImage: nissinBeijinho,
      mealName: "Miojo de Beijinho",
      unityPrice: 2.0,
      quantity: { quantity },
      setQuantity: { setQuantity },
    },
  ];

  const finalPrice = 0;

  // const upperLinkBackoffice = [{title:"backoffice", href:"/backoffice", active:true}, {title:"perfil", href:"/", active:false}, {title:"sair", href:"/", active:false}]
  // const backofficeLink = [{title:"Pedidos", href:"/", active:false}, {title:"Usuários", href:"/", active:false}, {title:"Refeições", href:"/", active:false}, {title:"Categorias de Refeições", href:"/", active:false}]
  // const bakcofficeSubtext = "Gerencie pedidos, refeições e mais."
  // const backofficeHeader = "Backoffice"
  const upperLinkHomePage = [
    { title: "backoffice", href: "/backoffice", active: true },
    { title: "refeições", href: "/", active: false },
    { title: "meus pedidos", href: "/", active: false },
    { title: "sair", href: "/", active: false },
  ];
  const homepageSubtext =
    "Monte o seu prato, escolha sua salada,molho, prato principal, guarnição e bebida.";
  const pronoun = "o" + ", ";
  const name = "Usuário";
  const personalHeader = "Bem-vind" + pronoun + name;
  const defaultHeader = "Monte o seu prato";

  return (
    <div className="homepage-body">
      <Navbar
        headerText={defaultHeader}
        headerSubtext={homepageSubtext}
        upperLinkObject={upperLinkHomePage}
        type="restaurant"
      />
      <CategoryContainer Category="Miojo">
        {MiojoCategory.map((product) => (
          <CardPrincipal
            name={product.name}
            value={product.value}
            img={product.img}
            description={product.description}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </CategoryContainer>
      <CategoryContainer Category="Miojo">
        {MiojoCategory.map((product) => (
          <CardPrincipal
            name={product.name}
            value={product.value}
            img={product.img}
            description={product.description}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </CategoryContainer>
      <OrderContainer>
        {Ordered.map((product) => (
          <OrderCard
            cardImage={product.cardImage}
            mealName={product.mealName}
            unityPrice={product.unityPrice}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ))}
      </OrderContainer>
      <div className="login-or-signin">
        <br className="br-homepage" />
        <div className="show-final-price">
          <h1 className="h1-homepage">Preço total do pedido:</h1>
          <h1 className="h1-final-price">{numberFormat(finalPrice)}</h1>
        </div>
        <h2 className="h2-homepage">
          Para finalizar o seu pedido, entre com sua conta ou faça o seu
          cadastro.
        </h2>
        <div className="login-or-not-buttons">
          <Link to="/login">
            <Button className="fundoVerde">Entrar com minha conta</Button>
          </Link>
          <Link to="/cadastro">
            <Button className="bordaVerde">Fazer o meu cadastro</Button>
          </Link>
        </div>
      </div>
      <br className="br-homepage" />
      {/*             <div className='logged-finish-and-pay'>
                <div className="show-final-price">
                    <h1 className="h1-homepage">Preço total do pedido:</h1>
                    <h1 className="h1-final-price">R$ 00,00</h1>
                </div>
                <Button className="fundoVerde">Finalizar e pagar</Button>
            </div> */}
      <Footer />
    </div>
  );
}
