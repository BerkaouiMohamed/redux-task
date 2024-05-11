import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../redux/productActions";

function EditCake() {
  const dispatch =useDispatch()
    const handleUpdate =(e)=>{
      e.preventDefault()
      dispatch(editProduct(productState))
    }
    const handleChange =(e)=>{

          
      SetProductState({...productState,[e.target.name]:e.target.value})




    }


     const {id} =useParams()

     const product=useSelector((state)=>state.cake.find((ele)=>ele.id===id))
     const [productState,SetProductState]=useState(product)
  return (
   

    <div>
      <h1>edit Product</h1>

      <form onSubmit={handleUpdate}>
        title <input type="text" name="title" id=""  value={productState.title} onChange={handleChange} />
        price <input type="text" name="price" id=""  value={productState.price } onChange={handleChange} />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default EditCake;
