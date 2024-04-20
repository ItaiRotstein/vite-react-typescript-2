import { ReactNode, createContext, useContext, useReducer } from 'react';

import ProductReducer from './ProductReducer';
import CartReducer from './CartReducer';
import FilterReducer from './FilterReducer';

import { Product, ProductActions } from '../types/Product';
import { CartActions } from '../types/Cart';
import { FilterActions, FilterState } from '../types/Filter';

type Props = {
    children: ReactNode;
};

type ShoppingCart = {
    productDispatch: React.Dispatch<ProductActions>;
    cartDispatch: React.Dispatch<CartActions>;
    filterDispatch: React.Dispatch<FilterActions>;
    productState: { products: Product[]; };
    cartState: { cart: Product[]; };
    filterState: FilterState;
};

const ShoppingCart = createContext({} as ShoppingCart);

const CartContext = ({ children }: Props) => {

    // faker.seed(99);
    // const products = [...Array(20)].map(() => (
    //     {
    //         id: faker.string.uuid(),
    //         name: faker.commerce.productName(),
    //         price: faker.commerce.price(),
    //         image: faker.image.url(),
    //         fastDelivery: faker.datatype.boolean(),
    //         inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    //         rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    //         qty: ''
    //     }
    // ));

    const [productState, productDispatch] = useReducer(ProductReducer, {
        products: [],
    });

    const [cartState, cartDispatch] = useReducer(CartReducer, {
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
            productState,
            cartState,
            filterState,
            productDispatch,
            cartDispatch,
            filterDispatch,
        }}>
            {children}
        </ShoppingCart.Provider>
    );
};
export default CartContext;

export const CartState = () => {
    return useContext(ShoppingCart);
};