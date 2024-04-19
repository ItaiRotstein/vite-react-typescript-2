import { ReactNode, createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';

import CartReducer from './CartReducer';
import FilterReducer from './FilterReducer';

import { Product } from '../types/Product';
import { FilterActions, FilterState } from '../types/Filter';
import { CartActions } from '../types/Cart';

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type ShoppingCart = {
    state: {
        products: Product[];
        cart: Product[];
    };
    dispatch: React.Dispatch<CartActions>;
    filterState: FilterState;
    filterDispatch: React.Dispatch<FilterActions>;

};

const ShoppingCart = createContext({} as ShoppingCart);

const CartContext = ({ children }: ShoppingCartProviderProps) => {

    faker.seed(99);
    const products = [...Array(20)].map(() => (
        {
            id: faker.string.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            image: faker.image.url(),
            fastDelivery: faker.datatype.boolean(),
            inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
            rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
            qty: ''
        }
    ));

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    });

    const [filterState, filterDispatch] = useReducer(FilterReducer, {
        byStock: false,
        byFastDelivery: false,
        sort: '',
        byRating: 0,
        searchQuery: '',
    });

    return (
        <ShoppingCart.Provider value={{
            state,
            dispatch,
            filterState,
            filterDispatch
        }}>
            {children}
        </ShoppingCart.Provider>
    );
};
export default CartContext;

export const CartState = () => {
    return useContext(ShoppingCart);
};