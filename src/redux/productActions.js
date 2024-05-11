import axios from "axios"
import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT, FETCHPRODUCTS } from "./actionTypes"




export const axiosAction=( )=>{

return( async(dispatch)=> {
    
    const data=await   axios.get('http://localhost:3000/products')
    dispatch(FetshProducts(data.data))})

}
export const FetshProducts=(param)=>{
    return{type:FETCHPRODUCTS,payload:param}
}
export const addProduct=(param)=>{
    return{type:ADDPRODUCT,payload:param}
}
export const deleteProduct=(param)=>{
    return{type:DELETEPRODUCT,payload:param} 
}

export const editProduct=(param)=>{
    return{type:EDITPRODUCT,payload:param}
}


 