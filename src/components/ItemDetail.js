import React, {useState} from 'react';
import { useParams, Link } from "react-router-dom";
import './style.css';
import ItemCount from './ItemCount';
import itemsList from "./itemsList";

const ItemDetail = () => {

    const [contadorDetail, SetContadorDetail] = useState (null);

    const onAdd = cant => {
        console.log("Se han agregado " + cant + " producto/s al carrito")

        SetContadorDetail(cant)
    }

    const parametros = useParams()
    const id = parametros.id


    return (
        <div className="detail">
          {itemsList.filter(item => item.id == id).map(Detail => (
            <div className="Detail" key={Detail.id}>
                <div className="Detail-info">
                    <h2>{Detail.prod_name}</h2>
                    <h3>{Detail.scientific_name}</h3>
                    <p className="desciption">{Detail.description}</p>
                    <p className="ubicacion">Ubicación: {Detail.placement}</p>
                    <p className="temp">Temperatura ideal: {Detail.temperature}</p>
                    <p className="riego">Riego: {Detail.water}</p>
                    <p className="pcio">${Detail.price}</p>
                    <div className="btns-wrap">
                        <ItemCount stock={6} initial={1} onAdd={onAdd}/>
                        {contadorDetail && 
                        <Link to="/carrito">
                        <button type="submit" className="buy">Comprar</button>
                        </Link>}
                    </div>
                </div>
                <div className="Detail-img">
                    <img src={Detail.prod_img}/>
                </div>
            </div>

          ))}
        </div>
      );
}

export default ItemDetail;


