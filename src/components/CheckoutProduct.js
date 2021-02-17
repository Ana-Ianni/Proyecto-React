import React from 'react';
import {Button} from '@material-ui/core/';
import { useStateValue } from "./CartContext";

function CheckoutProduct({ id, image, title, price}){
    const [{ cart }, dispatch] = useStateValue();
    
    const removeFromCart = () =>{
        dispatch({
            type: 'REMOVE_FROM_CART', 
            id: id,
        })
    }

    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <strong>$ {price}</strong>
                </p>
                <Button variant="contained" size="large" color="secondary" onClick={removeFromCart}>
                    Eliminar del carrito
                </Button>
            </div>
        </div>
    )
}

export default CheckoutProduct;