import React from 'react'
import './style.css';
import itemsList from "./itemsList";
import { NavLink } from "react-router-dom";

const Item = () =>{
    console.log(itemsList);
    
    const listItems = itemsList.map((item)=>
        <div className="card" key={item.id}>
            <div className="card-img">
                <img src={item.prod_img}/>
            </div>
            <div className="card-info">
                <h2>{item.prod_name}</h2>
                <p className="card-price">$ {item.price}</p>
            </div>
            <div className="card-btn">
                <button className="btn-add">Añadir al carrito</button>
                <button className="btn-info"><NavLink to = {`/producto/${item.id}`}>Más Información</NavLink></button>
            </div>
        </div>
    );

    return(
        <div className="card-wrap">
            {listItems}
        </div>
    )
}

export default Item;
