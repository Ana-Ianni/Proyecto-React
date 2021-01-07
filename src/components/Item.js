import React , {useState} from 'react'
import './style.css';
import ItemList from "./ItemList";

const Item = () =>{
    console.log(ItemList);
    
    const listItems = ItemList.map((item)=>
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
                <button className="btn-info">Más información</button>
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