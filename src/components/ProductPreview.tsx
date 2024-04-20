import { CartState } from '../context/CartContext';
import { Product } from '../types/Product';
import Rating from './Rating';

type Props = {
    prod: Product;
};

const ProductPreview = ({ prod }: Props) => {

    const { cartState: { cart }, cartDispatch } = CartState();

    //Button class: add to cart / out of order
    const buttonClass = prod.inStock ? (
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded'
    ) : (
        "bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded opacity-50 cursor-not-allowed"
    );

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-80" src={prod.image} />
            <div className="px-6 py-4">
                <p className="font-bold text-xl mb-2">
                    {prod.name}
                </p>
                <p className="text-gray-700 text-base">
                    ${prod.price}
                </p>
                <p className="text-gray-700 text-base">
                    {prod.fastDelivery ? 'Fast Delivery' : 'Delivery: 3 Days'}
                </p>
                <Rating rating={prod.rating} />
                {
                    cart.some(item => item._id === prod._id) ? (
                        <button
                            className="unreset bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 mt-2 rounded"
                            onClick={() => cartDispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: prod._id
                            })}
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            disabled={prod.inStock === 0}
                            className={buttonClass}
                            onClick={() => cartDispatch({
                                type: 'ADD_TO_CART',
                                payload: prod,
                            })}
                        >
                            {!prod.inStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    )
                }
            </div>
        </div>
    );
};
export default ProductPreview;