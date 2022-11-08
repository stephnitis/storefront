let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
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
  activeCategory: ''
};

function productsList(state = initialState, action){
  const {type, payload} = action;

  switch(type){
    case 'category':
    return {
      ...state,
      products: state.products.map(product => {
        if(product.category === payload.name){
          return {
            name: product.name,
            price: product.price,
            activeCategory: payload
          }
        }
        return product;
      })
    }

    default:
      return state;
  }

}

export const filterElectronics = (category) => {
  return {
    type: category,
    payload: 'electronics',
  }
}

export default productsList;