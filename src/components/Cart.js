import React, { useContext, useState } from 'react'
import CartSubtotal from "./CartSubtotal"
import {useStateValue} from "./CartContext";
import CheckoutProduct from './CheckoutProduct';

export default function Cart() {
    const [{cart}, dispatch] = useStateValue();
    return(
        <div className="cartContainer">
            <div className="cart-left">
                <h2 className="cartTitle">Tu Carrito de Compras</h2>
                {cart.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}/>
                ))}
            </div>
            <div className="cart-right">
                <CartSubtotal/>
            </div>
        </div>
    )
}