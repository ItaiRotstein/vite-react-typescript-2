import { MdDeleteForever } from 'react-icons/md';
import { ProductType } from '../types/ProductType';
import { Dispatch } from 'react';

type Props = {
    product: ProductType;
    dispatch: Dispatch<any>;
};

const CartItem = ({ product, dispatch }: Props) => {
    return (
        <li className="w-full flex justify-between items-center gap-4 px-4 md:px-8 lg:px-24 py-2 border-b rounded-t-lg dark:border-gray-600">
            <img src={product.image} className='w-32 rounded-sm' />
            <p className=''>{product.name}</p>
            <p className=''>${product.price}</p>
            <select
                id="qty"
                name="qty"
                value={product.qty}
                onChange={(e) => dispatch(
                    {
                        type: 'CHANGE_CART_QTY',
                        payload: { id: product.id, qty: e.target.value }
                    }
                )}>
                {[...Array(product.inStock).keys()].map((stock) => (
                    <option key={stock}> {stock + 1}</option>
                ))}
            </select>
            <MdDeleteForever
                style={{ fontSize: '20px', cursor: 'pointer' }}
                onClick={() => dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: product.id
                })}
            />
        </li>
    );
};
export default CartItem;