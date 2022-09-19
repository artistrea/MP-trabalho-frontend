import React from 'react';
import "./styles.css";
import {useState} from 'react';

import Botao from "../Button"
import numberFormat from '../../utils/numberFormat';

const CardPrincipal = ({name,description,value, img, quantity, setQuantity,addOrder, ...props}) => {
    
    const [added, setAdded] = useState(false);
    
    function handleClick(){
        setAdded(!added);
        if (!added) {addOrder()}
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
                <Botao width={326} height={37} className="fundoVerde" onClick={handleClick} >{added?`Adicionado ao meu prato`:`Adicionar ao meu prato`}</Botao>
            </div>
        </div>
        </>
    )
}

export default CardPrincipal;