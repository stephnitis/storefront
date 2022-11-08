import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/product-reducer';

let reducers = combineReducers({
  productReducer: productReducer,

});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}