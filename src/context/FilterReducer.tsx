import { ProductType } from '../types/ProductType';
type State = {
    products: ProductType[];
    cart: ProductType[];
};
const FilterReducer = (state: State, action: any) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, qty: 1 }]
            };
        default:
            return state;
    }

};
export default FilterReducer;