import './styles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar({headerText, headerSubtext, upperLinkObject, backofficeLinkObject, type}) {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Cardápio</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Cardápio</NavLink>
                </li>
                <li>

                </li>
            </ul>
        </nav>
    )
}