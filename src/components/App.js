import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar"
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart"
import {CartProvider} from "./CartContext"
import reducer, {initialState} from "./reducer"
import {firestore} from "./FirebaseConfig"
import ItemContainer from './ItemContainer';

const App = () => {

  const [productos, SetProductos] = useState([]);

  useEffect(() => {

    const db = firestore
    const collection = db.collection("productos")
    const query = collection.get()

    query
    .then(({docs})=>{
      SetProductos(docs.map(doc=>({id : doc.id, ...doc.data()})))
    })
    .catch(()=>{
      console.log("Falla en el pedido de datos")
    })
  }, [])

  return(
    <CartProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <NavBar/>
        <Switch>
            <Route path="/Catalogo">
                <ItemContainer/>
            </Route>
            
            <Route path="/Producto/:id">
                <ItemDetailContainer/>
            </Route>

            <Route path="/Carrito">
                <Cart/>
            </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;