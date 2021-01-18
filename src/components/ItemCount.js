import React , {useState} from 'react'
import './style.css';

const ItemCount = ({ state, onAdd, reset, onSubstract}) =>{
    
    return(
        <div className="contador">
            <p>{state}</p>
            <div className="btn-wrap">
            <button onClick={ onSubstract }> - </button>
            <button onClick={ reset } className="reset"> Borrar </button>
            <button onClick={ onAdd }> + </button>
            </div>
        </div>
    );
}

export default ItemCount;