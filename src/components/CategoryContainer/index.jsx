import CardPrincipal from "../../components/CardPrincipal";
import './styles.css';
import React from 'react';

export default function CategoryContainer({Category, children }) {
    return (
        <div>
            <div className="categoryContainer">
                <h1 className="h1-homepage">{Category}</h1>
                <div className="home-category-row">
                    { children }
                </div>
            </div>
            <hr/>
        </div>
    )}