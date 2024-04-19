import { Link } from 'react-router-dom';

import { MdDeleteForever } from "react-icons/md";
import { Product } from '../types/Product';
import { CartActions } from '../types/Cart';

type Props = {
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
    isShow: boolean;
    cart: Product[];
    dispatch: React.Dispatch<CartActions>;
}

const CartMenu = ({ setIsShow, cart, dispatch, isShow}: Props) => {

    const toggleClass = isShow ? '' : 'hidden';

    return (
        <div className={`${toggleClass} z-50 absolute right-0 top-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
            <div className="px-4 py-3">
                <span className="font-bold block text-sm text-gray-900">
                    Cart {cart.length <= 0 && 'is Empty'}
                </span>
                {cart.length > 0 &&
                    cart.map((product) => (
                        <div key={product.id} className='flex items-center justify-between my-2 py-2 border-b'>
                            <img src={product.image} className='w-24 mr-2 rounded-sm ' />
                            <span className="block mt-2 mr-2 text-sm  text-gray-500 truncate">
                                {product.name}
                            </span>
                            <MdDeleteForever
                                style={{ fontSize: '20px', cursor: 'pointer' }}
                                onClick={() => dispatch({
                                    type: 'REMOVE_FROM_CART',
                                    payload: product.id
                                })}
                            />
                        </div>
                    ))}
                <Link to='/cart'>
                    <button onClick={() => setIsShow(false)} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go to Cart
                    </button>
                </Link>
            </div>
        </div>
    );
};
export default CartMenu;