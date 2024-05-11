import { ADDCAKE, DELETECAKE, EDITCAKE } from "../actionTypes"



const initailState = [{
    id: "1ec",
    title: "brawniz",
    price: "5000"
}]

const cakeReducer = (state = initailState, action) => {
    switch (action.type) {
        case ADDCAKE: return [...state, { ...action.payload, id: (Math.random()*100).toString() }]
        case DELETECAKE: return state.filter((product) => product.id != action.payload.id)
        case EDITCAKE: return state.map(product => product.id == action.payload.id ? { ...product, ...action.payload }:product)
        default: return state
    }
}

export default cakeReducer