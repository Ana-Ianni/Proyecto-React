import React from 'react'
import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"

const App = () => {
  return(
    <div>
      <NavBar/>
      <ItemListContainer greeting="Oops! Esta página aún se encuentra bajo construcción..."/>
    </div>
  );
}

export default App;
