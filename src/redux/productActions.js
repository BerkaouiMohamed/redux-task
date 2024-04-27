import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT } from "./actionTypes"

export const addProduct=(param)=>{
    return{type:ADDPRODUCT,payload:param}
}
export const deleteProduct=(param)=>{
    return{type:DELETEPRODUCT,payload:param} 
}

export const editProduct=(param)=>{
    return{type:EDITPRODUCT,payload:param}
}


 