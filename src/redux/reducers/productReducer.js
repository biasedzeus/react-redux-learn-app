import { actionTypes } from "../constants/actionTypes"

const initialState = {
    products:[{
        id:1,
        title:"Naruto",
        category:"Ninja"
    }]
}


export const productReducer = (state=initialState,{type,payload}) =>
{
    switch (type) {
        case actionTypes.SET_PRODUCTS:
            return state;
            
            
    
        default:
            return state;
           
    }
}