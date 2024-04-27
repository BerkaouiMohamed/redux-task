import { ADDPRODUCT, DELETEPRODUCT, EDITPRODUCT } from "./actionTypes"



const initailState = [{
    id: "15ec",
    title: "mouse gaming",
    price: "5000"
}]

const ProductReducer = (state = initailState, action) => {
    switch (action.type) {
        case ADDPRODUCT: return [...state, { ...action.payload, id: Math.random().toString() }]
        case DELETEPRODUCT: return state.filter((product) => product.id != action.payload.id)
        case EDITPRODUCT: return state.map(product => product.id == action.payload.id ? { ...product, ...action.payload }:product)
        default: return state
    }
}

export default ProductReducer