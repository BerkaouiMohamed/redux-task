import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productActions";

function AddProduct() {
    const dispatch=useDispatch()
    const [product,setProuct]=useState({})

    const handleChange=(e)=>{
        setProuct(
            {...product,[e.target.name]:e.target.value}
        )
    }
const hundleAdd=(e)=>{
    e.preventDefault()
    dispatch(addProduct(product))
}
  return (
    <div>
      <h1>AddProduct</h1>

      <form onSubmit={hundleAdd}>
       title <input type="text" name="title" id="" onChange={handleChange}/> 
    price    <input type="text" name="price" id="" onChange={handleChange}/> 
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default AddProduct;
