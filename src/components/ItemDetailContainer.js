import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
    const [ item, setItem ] = useState()

    const { id } = useParams()

    useEffect(() => {
        const promiseDetail = new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("hola"); 
        }, 2000);
        }
        )
        promiseDetail.then(result => setItem(result)) 
        promiseDetail.catch(err => console.log("Error")) 

    },  [id]);

    return (
        <div className="itemDetailContainer">
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer;