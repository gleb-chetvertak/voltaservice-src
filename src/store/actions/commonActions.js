export default {
  ADD_PRODUCT_TO_CART({commit}, product){
    commit('SET_PRODUCT_TO_CART', product);
  },
  REMOVE_PRODUCT_FROM_CART({commit}, index){
    commit('DELETE_PRODUCT_FROM_CART', index);
  },
  REMOVE_PRODUCT_FROM_CART_BY_ID({commit}, product){
    commit('DELETE_PRODUCT_FROM_CART_BY_ID', product);
  },
  ADD_PRODUCT_TO_COMPARE({commit}, product){
    commit('SET_PRODUCT_TO_COMPARE', product);
  },
  REMOVE_PRODUCT_FROM_COMPARE_BY_INDEX({commit}, index){
    commit('DELETE_PRODUCT_FROM_COMPARE_BY_INDEX', index);
  },
  REMOVE_PRODUCT_FROM_COMPARE_BY_ID({commit}, product){
    commit('DELETE_PRODUCT_FROM_COMPARE_BY_ID', product);
  },
  INCREMENT_CARTED_PRODUCT({commit}, index){
    commit('INCREMENT_PRODUCT', index);
  },
  DECREMENT_CARTED_PRODUCT({commit}, index){
    commit('DECREMENT_PRODUCT', index);
  },
  INCREMENT_HOME_SLIDE_ID({commit}){
    commit('INCREASE_HOME_SLIDE_ID');
  },
  DECREMENT_HOME_SLIDE_ID({commit}){
    commit('DECREASE_HOME_SLIDE_ID');
  }
}