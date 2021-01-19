import React , {useState} from 'react'
import './style.css';

const ItemCount = ({ stock, initial, onAdd}) =>{

    const [contador, setContador] = useState(initial)
    
    const sumar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 1){
            setContador(contador - 1)
        }
    }

    const reset = () => {
        setContador(0)
    } 

    const addCart = () =>{
        onAdd(contador)
    }
    
    return(
        <div className="itemCount-wrap">
        <div className="contador">
            <p>{contador}</p>
            <div className="btn-wrap">
            <button onClick={ restar }> - </button>
            <button onClick={ reset } className="reset"> Borrar </button>
            <button onClick={ sumar }> + </button>
            </div>
        </div>
        <button type="submit" className="detail-add"  onClick={addCart}>Añadir al Carrito</button>
        </div>

    );
}

export default ItemCount;