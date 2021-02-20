import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer, {initialState} from "./reducer"
import { CartProvider } from "./CartContext";

function Index(){

    return(
      <CartProvider initialState={initialState} reducer={reducer}>
        <App />
      </CartProvider>
    )
};

export default Index;