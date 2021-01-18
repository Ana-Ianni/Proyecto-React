import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () =>{
    return(
        <Switch>
            <Route path="/Catalogo">
                <ItemListContainer/>
            </Route>
            
            <Route path="/Producto/:id">
                <ItemDetailContainer/>
            </Route>
        </Switch>
    )
}

export default Main;