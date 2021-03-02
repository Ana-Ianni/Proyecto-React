import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./NavBar"
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart"
import {useStateValue} from "./CartContext";
import {firestore} from "./FirebaseConfig"
import ItemContainer from './ItemContainer';
import LogIn from "./LogIn"
import {auth} from "./FirebaseConfig"
import Payment from "./Payment";
import theme from "./theme";
import { MuiThemeProvider} from '@material-ui/core/styles';

function App(){
  const [productos, SetProductos] = useState([]);
  const [{}, dispatch] = useStateValue();

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


    auth.onAuthStateChanged((authUser) =>{
      console.log("nombre de usuario: ", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
          dispatch({
            type: "SET_USER",
            user: null,
          });
      }
    });
  }, []);

  return(
      <BrowserRouter>
        <MuiThemeProvider theme={theme}>
          <NavBar/>
          <Switch>
              <Route exact path="/">
                  <ItemContainer/>
              </Route>
              
              <Route path="/Producto/:id">
                  <ItemDetailContainer/>
              </Route>

              <Route path="/Carrito">
                  <Cart/>
              </Route>

              <Route path="/LogIn">
                  <LogIn/>
              </Route>

              <Route path="/Pago">
                <Payment/>
              </Route>
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;