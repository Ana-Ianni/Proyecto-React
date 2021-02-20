import React, {useState} from 'react'
import {useStateValue} from "./CartContext";
import { getCartTotal } from "./reducer";
import {Button} from '@material-ui/core/';
import firebase from "firebase"
import {firestore} from "./FirebaseConfig";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

const Payment = () =>{
    const [{cart, user}, dispatch] = useStateValue();
    const [name, SetName] = useState("");
    const [surname, SetSurname] = useState("");
    const [tel, SetTel] = useState("");
    const [id, SetId] = useState("");

    const confirmarCompra = (e) =>{
        e.preventDefault()
        const orden = {
            buyer : {name : name, surname : surname, tel : tel},
            items : cart,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total : getCartTotal(cart)
        }
        const db = firestore
        const collection = db.collection("orders")

        collection
        .add(orden)

        .then((response) =>{
            console.log(response)
            SetId(response.id)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <div className="payment">
            <div className="payment-container">
                <div className="payment-section">
                    <div className="payment-data">
                        {id? <p>¡Tu compra ha sido confirmada! Nro de orden : {id}</p> : null}
                        <h3>Datos de compra</h3>
                        <form>
                            <h5 className="label-form">Nombre</h5>
                            <input type="text" value={name} onChange={e => SetName(e.target.value)} className="input-form-p"/>

                            <h5 className="label-form">Apellido</h5>
                            <input type="text" value={surname} onChange={e => SetSurname(e.target.value)} className="input-form-p"/>

                            <h5 className="label-form">Teléfono</h5>
                            <input type="text" value={tel} onChange={e => SetTel(e.target.value)} className="input-form-p"/>


                        </form>
                    </div>
                </div>
                <div className="payment-section">
                    <div className="payment-title">
                            <h3>Tu lista de compras</h3>
                        </div>
                        <div className="payment-items">
                            {cart.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                </div>
                <div className="payment-section">
                    <div className="payment-priceContainer">
                        <CurrencyFormat
                            renderText={(value) => (
                                <h3>Total: {value}</h3>
                                )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                        />
                        
                        <Button variant="contained" color="primary" onClick={confirmarCompra} className="confirm" size="large">Confirmar compra</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;