import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/Editproduct";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddCake from "./pages/AddCake";
import EditCake from "./pages/EditCake";
import { useDispatch } from "react-redux";
import { FetshProducts, axiosAction } from "./redux/productActions";
import axios from "axios";


function App() {

  const dispatch=useDispatch()
  useEffect(()=>{
dispatch(axiosAction())
  })
  


  return (
    <div>
      <ToastContainer
        position="top-center"

        closeOnClick
        theme="dark"

      />
      <Link to='/'>home</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/addCake" element={<AddCake />} />
        <Route path="/editCake/:id" element={<EditCake />} />
      </Routes>

    </div>
  );
}

export default App;
