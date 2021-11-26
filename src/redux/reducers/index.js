// This file is used to combine all reducer .

import { combineReducers } from "redux";
import { productReducer } from "./product.reducer";

export const reducers = combineReducers({
    allProducts:productReducer
})