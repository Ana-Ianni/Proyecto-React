import React from "react"
import './style.css';
import ShoppingCart from './ShoppingCart.svg';

console.log(ShoppingCart);

const CartWidget = function(){
    return(
        <>
        <div className="shoppingCart">
            <a href="#">
                <img src={ShoppingCart} alt="Carrito" className="cart"/>
            </a>
        </div>
        </>
    );
}

export default CartWidget