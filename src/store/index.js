import { createStore, combineReducers } from "redux"
import ProductReducer from "./reducer/ProductReducer"
import CartReducer from "./reducer/CartReducer"
import {devToolsEnhancer} from "redux-devtools-extension"
const root = combineReducers({
    ProductReducer,
    CartReducer
    
})
const store = createStore(root,devToolsEnhancer())
export default store