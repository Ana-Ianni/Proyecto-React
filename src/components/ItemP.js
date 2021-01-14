import React , {useState, useEffect} from 'react'
import './style.css';
import Item from "./Item";

const ItemP = ({products}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const itemsPromise = new Promise((resolve, reject) =>{
            setTimeout(()=> {
                resolve(
                    console.log(products)
                )
                reject(
                    console.log("Error al cargar los productos")
                )
            }, 2000)
        })
        itemsPromise.then((resultado)=>{
            setItems(resultado);
        }).catch((resultado) => {
            console.log({ resultado });
        });
    })
   
    return(
        <Item state={items}/>
    )
}

export default ItemP;