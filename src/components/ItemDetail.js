import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import './style.css';
import ItemCount from './ItemCount';
import itemsList from "./itemsList";

const ItemDetail = () => {

    const [state, setState] = useState(0)
    
    const onAdd = () => {
        setState(state + 1)
    }

    const onSubstract = () => {
        setState(state - 1)
    }

    const reset = () => {
        setState(0)
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
                    <p className="pcio">$ {Detail.price}</p>
                    <div className="btns-wrap">
                        <ItemCount 
                            state={state} 
                            onSubstract={onSubstract}
                            onAdd={onAdd}
                            reset={reset}/>
                        <button className="detail-add">Añadir al carrito</button>
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