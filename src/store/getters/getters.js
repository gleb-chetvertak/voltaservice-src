export default {
  PRODUCTS(state){
    return state.products;
  },
  SINGLE_PRODUCT: (state) => (productId) => {
    let product = {};
    state.products.map(p => {
      if (p.id == productId) {
        product = p;
      }
    })
    return product;
  },
  PRODUCTS_BY_GROUP: (state) => (groupId) => {
    let products = [];
    state.products.map(p => {
      if (p["group_id"] === groupId) {
        products.push(p);
      }
    })
    return products;
  },
  CATEGORIES(state){
    return state.categories;
  },
  GROUPS(state){
    return state.groups;
  },
  GROUP_OF_PRODUCT: (state) => (groupId) => {
    let group = {};
    state.groups.map(g => {
      if (g.id === groupId) {
        group = g;
      }
    })
    return group;
  },
  CATEGORY_OF_PRODUCT: (state) => (categoryId) => {
    let category = {};
    state.categories.map(c => {
      if (c.id === categoryId) {
        category = c;
      }
    })
    return category;
  },
  GROUPS_BY_CATEGORY: (state) => (catId) => {
    let groups = [];
    state.groups.map(g => {
      if (g["category_id"] === catId) {
        groups.push(g);
      }
    })
    return groups;
  },
  SPECS: (state) => (categoryId) => {
    let category;
    state.categories.map(c => {
      if (c.id === categoryId) {
        category = c;
      }
    })
    return category.specs;
  },
  SINGLE_SPEC: (state) => (categoryId, specId) => {
    let category;
    let spec;
    state.categories.map(c => {
      if (c.id === categoryId) {
        category = c;
      }
    })
    category.specs.map(s => {
      if (s.id === specId) {
        spec = s;
      }
    })
    return spec;
  },
  CART(state){
    return state.cart;
  },
  COMPARE(state){
    return state.compare;
  },
  HOME_SLIDE_ID(state){
    return state.homeSlideId;
  },
  FILE_TYPES(state){
    return state.fileTypes;
  },
  FORM(state){
    return state.form;
  }
}