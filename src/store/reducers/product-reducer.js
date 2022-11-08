let initialState = {
  categories: [
    { name: 'electronics', displayName: 'ELECTRONICS' },
    { name: 'food', displayName: 'FOOD' },
    { name: 'clothing', displayName: 'CLOTHING' },
  ],

  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inventory: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inventory: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inventory: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inventory: 10 },
    { name: 'Apples', category: 'food', price: .99, inventory: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inventory: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inventory: 90 },
  ],
  activeCategory: '',
};

function productReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'category':
      return {
        ...state,
        activeCategory: payload,
      }
    
    case 'reset':
      return initialState;

    default:
      return initialState;
      
  }
}

export const filterCategory = (activeCategory) => {
  return {
    type: 'category',
    payload: activeCategory,
  }
}

export default productReducer;