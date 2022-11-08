const initialState = {
  itemsToPurchase : [],
  quantityInCart: 0,
}

function cartReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  console.log(state);
  switch (type) {

    case 'add':
      let cart = {
        itemsToPurchase: [...state.itemsToPurchase, payload],
        quantityInCart: state.quantityInCart + 1,
      }
      return cart;



    case 'remove':
      return {
        itemsToPurchase: {}
      }

    case 'view':
      return {
        itemsToPurchase: {}
      }
        
    case 'reset':
      return initialState;

    default:
      return initialState;
      
  }
}

export const addItemToCart = (product) => {
  return {
    type: 'add',
    payload: product,
  }
}

export const removeItemFromCart = (product) => {
  return {
    type: 'remove',
    payload: product,
  }
}

export default cartReducer;