import { ReactNode, createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import CartReducer from './CartReducer';
import { ProductType } from '../types/ProductType';

type ShoppingCartProviderProps = {
    children: ReactNode;
};

type Cart = {
    // state: {
        products: ProductType[];
    //     cart: ProductType[];
    // };
    dispatch: any;
    useReducer: any;
    state:any
};

const Cart = createContext({} as Cart);

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
            qty: 0
        }
    ));

    const [state, dispatch] = useReducer<any>(CartReducer, {
        products,
        cart: []
    });

    const [productState, prosuctDispatch] = useReducer<any>(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: ''
    });


    return (
        <Cart.Provider value={{
            products,
            state,
            dispatch,
            useReducer
        }}>
            {children}
        </Cart.Provider>
    );
};
export default CartContext;

export const CartState = () => {
    return useContext(Cart);
};