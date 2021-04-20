import { combineReducers } from "@reduxjs/toolkit"
import productReduceer from "./products"
export default combineReducers({
    products: productReduceer
})