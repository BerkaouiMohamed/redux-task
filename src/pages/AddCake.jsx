import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCake } from "../redux/cake/cakeActions";

function AddCake() {
    const dispatch=useDispatch()
    const [product,setProuct]=useState({})
    const ref=useRef(null)


    const handleChange=(e)=>{
        setProuct(
            {...product,[e.target.name]:e.target.value}
        )
    }
const hundleAdd=(e)=>{
    e.preventDefault()
    dispatch(addCake(product))
    ref.current[0].value=""
    ref.current[1].value=""
    toast('product added')


}
  return (
    <div>
      <h1>AddProduct</h1>

      <form ref={ref} onSubmit={hundleAdd}>
       title <input type="text" name="title" id=""  onChange={handleChange}/> 
    price    <input type="text" name="price" id="" onChange={handleChange}/> 
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default AddCake;
