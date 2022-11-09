
import cartReducer  from './cart-reducer';
import {legacy_createStore as createStore, combineReducers } from 'redux';
import {addToCart, removeFromCart} from './cart-reducer';

/**
 * example state
 * {productsInCart: []}
 * */ 

describe('Cart Reducer', () => {

  const reducers = combineReducers({
    cart: cartReducer,
  });

  const store = createStore(reducers);

  it('provides initial state', () => {
    let state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
  });
  it('allows for addition of products', () => {
    let state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));

    state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(2);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    expect(state.cart.productsInCart[1].name).toEqual('product two');
  });
  it('removes products', () => {
    let state = store.getState();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 15}

    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));

    store.dispatch(removeFromCart(productTwo));
    state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(1);
  });

});