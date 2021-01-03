import React from 'react'
import './style.css';
import CartWidget from "./CartWidget";

const NavBar = function(){
    return(
        <>
        <header className="nav">
            <div className="logo">
                <h1>Leafy</h1>
            </div>
            <div className="links-nav--wrap">
                <ul className="links-nav">
                    <li><a href="#" className="link-nav">Catálogo</a></li>
                    <li><a href="#" className="link-nav">Contacto</a></li>
                    <CartWidget></CartWidget>
                </ul>
            </div>
        </header>
        </>
    );
}

export default NavBar