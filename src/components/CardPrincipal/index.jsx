import React from 'react';
import "./styles.css";
import {useState} from 'react';

import Botao from "../Button"
import numberFormat from '../../utils/numberFormat';

import Imagem from "../../assets/22.jpeg";

const CardPrincipal = ({name,description,value, img, quantity, setQuantity, ...props}) => {
    
    const [verifica, setVerifica] = useState(false);
    
    function handleClick(){
        setVerifica(!verifica);
    }

    return (
        <>

        <div className="container-CardPrincipal">
            <div className="sombreado">
                <img src={img} alt="Imagem da refeição" className="Imagem"/>
                <div className="bloco"></div>
                <div className="name">{name}</div>
            </div>
            <div className="description">{description}</div>
            <div className="value">{numberFormat(value)} por porção </div>
            <div className="botao-cardPrincipal">
                <Botao width={326} height={37} className="fundoVerde" onClick={handleClick} >{verifica?`Adicionar ao meu prato`:`Adicionado ao meu prato`}</Botao>
            </div>
        </div>
        </>
    )
}

export default CardPrincipal;