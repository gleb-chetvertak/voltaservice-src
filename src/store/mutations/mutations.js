// import Vue from 'vue'

export default {
  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  },
  SET_CATEGORIES_TO_STATE: (state, categories) => {
    state.categories = categories;
  },
  SET_GROUPS_TO_STATE: (state, groups) => {
    state.groups = groups;
  },
  SET_SPECS_TO_STATE: (state, specs) => {
    state.specs = specs;
  },
  SET_PRODUCT_TO_CART: (state, product) => {
    let isNew = true;
    state.cart.map(p => {
      if (p.id === product.id) {
        p.qty++;
        isNew = false;
      }
    })
    if (isNew) {
      state.cart.push(product);
      product.qty++;        
    }
  },
  DELETE_PRODUCT_FROM_CART: (state, index) => {
    state.cart[index].qty = 0;
    state.cart.splice(index, 1);
  },
  DELETE_PRODUCT_FROM_CART_BY_ID: (state, product) => {
    let index = state.cart.indexOf(product);
    product.qty = 0;
    state.cart.splice(index, 1);
  },
  SET_PRODUCT_TO_COMPARE: (state, product) => {
    state.compare.push(product);
  },
  DELETE_PRODUCT_FROM_COMPARE_BY_INDEX: (state, index) => {
    state.compare.splice(index, 1);
  },
  DELETE_PRODUCT_FROM_COMPARE_BY_ID: (state, product) => {
    let index = state.compare.indexOf(product);
    state.compare.splice(index, 1);
  },
  INCREMENT_PRODUCT(state, index){
    state.cart[index].qty++;
  },
  DECREMENT_PRODUCT(state, index){
    if (state.cart[index].qty > 0) {
      state.cart[index].qty--;
    }
  },
  INCREASE_HOME_SLIDE_ID(state){
    if (state.homeSlideId < 7) {
      state.homeSlideId++;
    }
  },
  DECREASE_HOME_SLIDE_ID(state){
    if (state.homeSlideId > 1) {
      state.homeSlideId--;
    }
  }
}