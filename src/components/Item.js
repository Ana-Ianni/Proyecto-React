import React, {useState, useEffect} from 'react'
import './style.css';
import { Link } from "react-router-dom";
import {firestore} from "./FirebaseConfig"

function Item(){

    const [item, setItem] = useState([]);

    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")
        const query = collection.get()
    
        query
        .then(({docs})=>{
            setItem(docs.map(doc=>({id : doc.id, ...doc.data()})))
        })
        .catch(()=>{
          console.log("Falla en el pedido de datos")
        })
      }, [])

      const productos = item.map((productos)=>
        <div className="card">
            <div className="card-img">
                <img src={productos.image}/>
            </div>
            <div className="card-info">
                <h2>{productos.name}</h2>
                <p className="card-price">$ {productos.price}</p>
            </div>
            <div className="card-btn">
                <button className="btn-add"><Link to = {`/producto/${productos.id}`}>Más Información</Link></button>
            </div>
        </div>
      );
    
    return(
        <div className="itemsWrap">
            {productos}
        </div>
    )
}

export default Item;