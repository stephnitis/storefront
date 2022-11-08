import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsList from './reducers/productsList';

let reducers = combineReducers({
  productsList: productsList,

});

export default function store(){
  return createStore(reducers, composeWithDevTools())
}