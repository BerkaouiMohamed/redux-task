import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT, FETCHPRODUCTS } from "./actionTypes"



const initailState = [{}]

const ProductReducer = (state = initailState, action) => {
    switch (action.type) {
        case FETCHPRODUCTS :return [...action.payload]
        case ADDPRODUCT: return [...state, action.payload ]
        case DELETEPRODUCT: return state.filter((product) => product.id != action.payload.id)
        case EDITPRODUCT: return state.map(product => product.id == action.payload.id ? { ...product, ...action.payload }:product)
        default: return state
    }
}

export default ProductReducer