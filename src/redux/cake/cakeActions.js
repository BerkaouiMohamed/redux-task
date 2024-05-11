import { ADDCAKE, DELETECAKE, EDITCAKE } from "../actionTypes"


export const addCake=(param)=>{
    return{type:ADDCAKE,payload:param}
}
export const deleteCake=(param)=>{
    return{type:DELETECAKE,payload:param} 
}

export const editCake=(param)=>{
    return{type:EDITCAKE,payload:param}
}

