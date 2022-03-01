import { combineReducers } from "redux";
import { productReducer } from "./product-Reducer";

const reducers = combineReducers({
  allProducts: productReducer,
});
export default reducers;
