import React from 'react'
import './style.css';
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = function(){
    return(
        <>
        <header className="nav">
            <div className="logo">
                <h1>Leafy</h1>
            </div>
            <div className="links-nav--wrap">
                <ul className="links-nav">
                    <li><NavLink to="/Home" className="link-nav">Home</NavLink></li>
                    <li><NavLink to="/Catalogo" className="link-nav">Catálogo</NavLink></li>
                    <li><NavLink to="/Nosotros" className="link-nav">Nosotros</NavLink></li>
                    <CartWidget></CartWidget>
                </ul>
            </div>
        </header>
        </>
    );
}

export default NavBar