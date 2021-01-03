import React from 'react'
import './style.css';

const ItemListContainer = ({greeting}) =>{
    return (
    <>
    <div className="itemListCont-wrap">
        <p className="greeting-title">{greeting}</p>
    </div>
    </>
    );
}

export default ItemListContainer;