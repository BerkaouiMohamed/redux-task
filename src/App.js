import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/Editproduct";



function App() {



  return (
    <div>
      <Link to='/'>home</Link>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path="/add" element={<AddProduct/>}/>
  <Route path="/edit/:id" element={<EditProduct/>}/>

</Routes>

    </div>
  );
}

export default App;
