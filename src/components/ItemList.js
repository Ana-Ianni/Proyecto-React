import React , {useState} from 'react'
import './style.css';

const ItemList = [
    {
        id : 1,
        prod_name : "Espada de San Jorge",
        price : 500,
        prod_img : "./multimedia/espada-san-jorge.png"
    },
    {
        id : 2,
        prod_name : "Monstera Deliciosa",
        price : 400,
        prod_img : "./multimedia/monstera.png"
    },
    {
        id : 3,
        prod_name : "Hosta",
        price : 450,
        prod_img : "./multimedia/hosta.png"
    },
    {
        id : 4,
        prod_name : "Lirio de Paz",
        price : 600,
        prod_img : "./multimedia/lirio-de-paz.png"
    },
    {
        id : 5,
        prod_name : "Variedad Suculentas",
        price : 600,
        prod_img : "./multimedia/suculentas.png"
    },
    {
        id : 6,
        prod_name : "Piel de Cocodrilo",
        price : 300,
        prod_img : "./multimedia/piel-cocodrilo.png"
    }
]

export default ItemList;