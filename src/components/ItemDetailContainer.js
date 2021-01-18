import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    useEffect(() => {
        const promiseDetail = new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("Cargando..."); 
        }, 2000);
        }
        )
        promiseDetail.then(console.log("Mostrando producto")) 
    },  []);

    return (
        <div className="itemDetailContainer">
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer;