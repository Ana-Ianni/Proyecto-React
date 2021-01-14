import React, { useState , useEffect } from 'react'
import './style.css';
import ItemCount from "./ItemCount";
import ItemP from "./ItemP";

const ItemListContainer = ({greeting}) =>{

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
    
    return (
    <>
    <main className="itemListCont-wrap">
        <ItemP/>
    </main>
    
    <section className="contador-wrap">

        <ItemCount 
            state={state} 
            onSubstract={onSubstract}
            onAdd={onAdd}
            reset={reset}
        />

    </section>
    </>
    );
}

export default ItemListContainer;

/*  <main className="itemListCont-wrap">
        <p className="greeting-title">{greeting}</p> 
    </main> */