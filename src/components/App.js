import React from 'react'
import NavBar from "./NavBar"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <NavBar/>
      <Main/>
    </BrowserRouter>
  );
}

export default App;
