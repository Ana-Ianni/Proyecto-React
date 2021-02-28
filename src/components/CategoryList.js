import React, {useState, useEffect} from 'react';
import './style.css';
import {firestore} from "./FirebaseConfig"
import {NavLink} from "react-router-dom";

export default function CategoryList() {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {

        const db = firestore
        const collection = db.collection("categorias")
        const query = collection.get()
    
        query
        .then(({docs})=>{
            setCategorias(docs.map(doc=>({id : doc.id, ...doc.data()})))
        })
        .catch(()=>{
          console.log("Falla en el pedido de datos")
        })
      }, [])

    const category = categorias.map((category)=>
    <div className="category" key={category.id}>
        <NavLink to={`/categorias/${category.id}`}>{category.name}</NavLink>
    </div>
    )

    return(
        <>
        <div className="categoryContainer">
            {category}
        </div>
        </>
    )
}
