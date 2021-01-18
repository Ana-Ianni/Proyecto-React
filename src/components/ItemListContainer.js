import React, { useState , useEffect } from 'react'
import './style.css';
import ItemCount from "./ItemCount";
import ItemP from "./ItemP";

const ItemListContainer = ({greeting}) =>{
    
    return (
    <>
    <main className="itemListCont-wrap">
        <ItemP/>
    </main>
    
    <section className="contador-wrap">

    </section>
    </>
    );
}

export default ItemListContainer;

/*  <main className="itemListCont-wrap">
        <p className="greeting-title">{greeting}</p> 
    </main> */