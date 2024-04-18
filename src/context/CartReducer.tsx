import { ProductType } from '../types/ProductType';
type State = {
  products: ProductType[];
  cart: ProductType[];

};
const CartReducer = (state: State, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'CHANGE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter(product =>
          product.id === action.payload.id ?
            product.qty = action.payload.qty : product.qty)
      };
    default:
      return state;
  }

};
export default CartReducer;