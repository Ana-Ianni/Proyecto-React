import React, {useState, useEffect} from 'react';
import { useParams, Link } from "react-router-dom";
import './style.css';
import {CartContext, useStateValue} from "./CartContext";
import ItemCount from './ItemCount';
import {firestore} from "./FirebaseConfig"

const ItemDetail = () => {

    const [contadorDetail, SetContadorDetail] = useState (null);
    const [detalle, SetDetalle] = useState([]);
    const [{cart}, dispatch] = useStateValue();

    const parametros = useParams()
    const id = parametros.id

    const onAdd = cant => {
        SetContadorDetail(cant)
    }

    const AddToCart = () =>{
        console.log(detalle)
        dispatch({
            type: 'ADD_TO_CART', 
            item: {
                id: id,
                title: detalle[0].name,
                image: detalle[0].image,
                price: detalle[0].price,
            },
        });
    };

    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")
        const query = collection.get()
    
        query
        .then(({docs})=>{
            SetDetalle(docs.filter(item => item.id == id).map(doc=>({id : doc.id, ...doc.data()})))
        })
        .catch(()=>{
          console.log("Falla en el pedido de datos")
        })
      }, [])

      const detail = detalle.filter(item => item.id == id).map(Detail => (
        <div className="Detail" key={Detail.id}>
            <div className="Detail-info">
                <h2>{Detail.name}</h2>
                <h3>{Detail.scientific_name}</h3>
                <p className="desciption">{Detail.description}</p>
                <p className="ubicacion">Ubicación: {Detail.placement}</p>
                <p className="temp">Temperatura ideal: {Detail.temperature}</p>
                <p className="riego">Riego: {Detail.water}</p>
                <p className="pcio">${Detail.price}</p>
                <div className="btns-wrap">

                    <Link to="/">
                    <button type="submit" className="buy">Comprar Ahora</button>
                    </Link>
                    <Link to="/carrito">
                    <button type="submit" className="btn-info" onClick={AddToCart} >Agregar al Carrito</button>
                    </Link>
                </div>
            </div>
            <div className="Detail-img">
                <img src={Detail.image}/>
            </div>
        </div>

      ))

    return (
        <div className="detail">
            {detail}
        </div>
      );
}

export default ItemDetail;

//SetDetalle(docs.filter(doc => doc.id == id).map(doc=>({id : doc.id, ...doc.data()})))

//<ItemCount stock={Detail.stock} initial={1} onAdd={onAdd}/>
