import { Product } from './Product';

type Add = { type: 'ADD_TO_CART'; payload: Product; };
type Remove = { type: 'REMOVE_FROM_CART'; payload: number; };
type ChangeQty = { type: 'CHANGE_CART_QTY'; payload: Product; };

export type CartActions =
    Add |
    Remove |
    ChangeQty;