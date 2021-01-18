import React , {useState} from 'react'
import './style.css';

const itemsList = [
    {
        id : 1,
        prod_name : "Espada de San Jorge",
        scientific_name: "Dracaena trifasciata",
        description: "Se caracteriza por tener hojas plano-cóncavas, gruesas y bastante duras, que miden entre los 30cm y 1m de longitud. Se trata de una de las plantas que más recomendaciones tiene para tener en casa dado que tiene la capacidad de poder purificar el aire. Requiere pocos cuidados",
        placement: "Interior/Exterior con semisombra",
        temperature:"Templada",
        water:"Unicamente cuando la tierra esté seca",
        price : 500,
        prod_img : "./multimedia/espada-san-jorge.png", 
    },
    {
        id : 2,
        prod_name : "Hoja Rota",
        scientific_name: "Monstera deliciosa",
        description: "Es una planta trepadora de raíces aéreas. Es capaz de crecer en vertical como trepadora pero también hacia abajo de manera colgante. Su crecimiento es lento y sus hojas nacen enteras, y al ir creciendo aparecen sus característicos agujeros, desarrollados para resistir a los vientos tropicales. La flor crece y abre a mediados de verano",
        placement: "Interior con muy buena luz natural o luz filtrada.",
        temperature:"Templada/Cálida",
        water:"Unicamente cuando la tierra esté seca",
        price : 400,
        prod_img : "./multimedia/monstera.png"
    },
    {
        id : 3,
        prod_name : "Hosta",
        scientific_name: "Dracaena trifasciata",
        description: "Caracterizada por hojas muy grandes, de forma ovalada con la base en forma de corazón y la lámina arrugada, de color verde irregularmente jaspeado. Las flores son de color lila asociadas en racimo. Es una planta originaria de Japón que crece hasta 60-70 cm de altura.",
        placement: "Interior o en sombra parcial.",
        temperature:"Entre los 10°C Y 20°C",
        water:"La tierra debe mantenerse húmeda",
        price : 450,
        prod_img : "./multimedia/hosta.png"
    },
    {
        id : 4,
        prod_name : "Lirio de Paz",
        scientific_name: "Spathiphyllum",
        description: "Tiene las hojas de color verdes y se puede llegar a desarrollar hasta alcanzar el metro de altura. Las hojas son de forma lanceoladas y se inclinan desde el centro hacia fuera. Sus flores son de color blanco. Nacen y crecen a partir de los tallos.",
        placement: "Interior",
        temperature:"18°C - 25°C",
        water:"Máximo 2 veces por semana",
        price : 600,
        prod_img : "./multimedia/lirio-de-paz.png"
    },
    {
        id : 5,
        prod_name : "Variedad Suculentas",
        scientific_name: "Dracaena trifasciata",
        description: "Se caracteriza por tener hojas plano-cóncavas, gruesas y bastante duras, que miden entre los 30cm y 1m de longitud. Se trata de una de las plantas que más recomendaciones tiene para tener en casa dado que tiene la capacidad de poder purificar el aire. Requiere pocos cuidados",
        placement: "Interior/Exterior con semisombra",
        temperature:"5°C - 30°C",
        water:"Unicamente cuando la tierra esté seca",
        price : 600,
        prod_img : "./multimedia/suculentas.png"
    },
    {
        id : 6,
        prod_name : "Piel de Cocodrilo",
        scientific_name: "Dracaena trifasciata",
        description: "Se caracteriza por tener hojas plano-cóncavas, gruesas y bastante duras, que miden entre los 30cm y 1m de longitud. Se trata de una de las plantas que más recomendaciones tiene para tener en casa dado que tiene la capacidad de poder purificar el aire. Requiere pocos cuidados",
        placement: "Interior/Exterior con semisombra",
        temperature:"5°C - 30°C",
        water:"Unicamente cuando la tierra esté seca",
        price : 300,
        prod_img : "./multimedia/piel-cocodrilo.png"
    }
]

export default itemsList;
