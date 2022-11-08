let initialState = {
  categories: [
  { name: 'electronics', displayName: 'ELECTRONICS' },
  { name: 'food', displayName: 'FOOD' },
  { name: 'clothing', displayName: 'CLOTHING' },
  ],
};  

  function categoryReducer(state = initialState, action) {
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

  export default categoryReducer;