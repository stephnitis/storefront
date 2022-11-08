import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/product-reducer';
import categoryReducer from './reducers/category-reducer';


let reducers = combineReducers({
  productReducer: productReducer,
  categoryReducer: categoryReducer,

});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}

