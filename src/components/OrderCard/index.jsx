import './styles.css';
import React from 'react';
import Input from '../Input';
import Button from '../Button';
import { useState, useEffect } from 'react';
import numberFormat from '../../utils/numberFormat';


export default function OrderCard({ cardImage, mealName, unityPrice, quantity, setQuantity}) {
    const [finalPriceInput, setFinalPriceInput] = useState(numberFormat((quantity * unityPrice)));

    function onClick(){
        setQuantity(0);
    }

    useEffect(() => {
        setFinalPriceInput((quantity * unityPrice));
    }, [quantity]);

    return (
        <div className='orderCardBox'>
            <div className="leftColumnOrderCard">
                <img alt={mealName} className="orderCardImage" src={cardImage} />
            </div>
            <div className='middleColumnOrderCard'>
                <br className='middleBRLabelOrderMeal' />
                <label className='meal_label_main'>{mealName}</label>
                <br className='middleBRLabelOrderMeal' />
                <label className='meal_label_tiny'>Preço unidade: {numberFormat(unityPrice)}</label> <br />
                <label className='meal_label_tiny'>Preço total: {finalPriceInput} </label> <br className='brInputComponents' />
            </div>
            <div className='rightColumnOrderCard'>
                <br />
                <span className='quantidade'>Quantidade</span>
                <Input showLabel={false}  disabled={false} type="number" width="140px" height="32px" color="#B3ACAC" fontSize="18px" value={quantity} onChange={e => {setQuantity(e.target.value)}}/>
                <br />
                <Button width="140px" height="30px" className="redButton" onClick={onClick}> Remover </Button>
            </div>
        </div>
    )
}