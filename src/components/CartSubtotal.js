import React from "react";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./CartContext";
import { getCartTotal } from "./reducer";
import {Button} from '@material-ui/core/';
import { useHistory } from "react-router-dom";

export default function CartSubtotal(){
    const history = useHistory();
    const [{ cart }, dispatch] = useStateValue();
    
    const EmptyCart = () =>{
        dispatch({
            type: 'RESET_CART'
        });
    };

    return(
        <div className="subtotal">
                <CurrencyFormat
                    renderText={(value) => (
                      <>
                        <p>
                          Subtotal ({cart.length} productos): <strong>{value}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    value={getCartTotal(cart)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
          <div className="iniciarCompra-wrap">
            <Button variant="contained" size="large" color="primary" className="btn-subtotal" onClick={ e => history.push("/Pago")}>Iniciar Compra</Button>
            <Button variant="outlined" size="large" color="secondary" className="btn-subtotal" onClick={EmptyCart}>Vaciar carrito</Button>
          </div>
        </div>
    )
}