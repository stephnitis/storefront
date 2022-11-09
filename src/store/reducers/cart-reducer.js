// maybe add unique id when you add item to cart

let initialState = {
  productsInCart: [],
  //maybe productsInCart.length to update quantity
  // numberOfItemsInCart: 0,
};

function cartReducer(state = initialState, action) {

  switch(action.type){
    // maybe to adjust inventory, you have an add case in product-reducer
    case 'add':
      return {
        //if productsInCart includes(qty) increment qty
        productsInCart: [...state.productsInCart, {...action.payload, qty: 1}]
      }

      case 'remove':
        // do we remove all the pizzas? 
        // do we manage quantity in cart?
        // filter
        return {
          productsInCart: state.productsInCart.filter(product => product.name !== action.payload.name)
        }

      default:
        return state;
  }
}

// actions
export const addToCart = (product) => {
  return {
    type: 'add',
    payload: product,
  }
}

export default cartReducer;

