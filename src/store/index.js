import {createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/product-reducer';
import categoryReducer from './reducers/category-reducer';
import cartReducer from './reducers/cart-reducer';
import thunk from 'redux-thunk';


let reducers = combineReducers({
  productReducer: productReducer,
  categoryReducer: categoryReducer,
  cartReducer: cartReducer,

});

export default function store(){
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

