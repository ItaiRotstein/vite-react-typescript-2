import { Product, ProductActions } from '../types/Product';
type State = {
  products: Product[];
  // cart: Product[];
}
const ProductReducer = (state: State, action: ProductActions) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }

};
export default ProductReducer;