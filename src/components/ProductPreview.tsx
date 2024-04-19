import { CartState } from '../context/CartContext';
import { Product } from '../types/Product';
import Rating from './Rating';

type Props = {
    product: Product;
};

const ProductPreview = ({ product }: Props) => {

    const { state: { cart }, dispatch } = CartState();

    //Button class: add to cart / out of order
    const buttonClass = product.inStock ? (
        'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded'
    ) : (
        "bg-blue-500 text-white font-bold py-2 px-4 mt-2 rounded opacity-50 cursor-not-allowed"
    );

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2">
            <img className="w-80" src={product.image} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">
                    ${product.price}
                </p>
                <p className="text-gray-700 text-base">
                    {product.fastDelivery ? 'Fast Delivery' : 'Delivery: 3 Days'}
                </p>
                <Rating rating={product.rating} isFiltersChild={false} filterDispatch={() => { }} />
                {
                    cart.some(item => item.id === product.id) ? (
                        <button
                            className="unreset bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 mt-2 rounded"
                            onClick={() => dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: product.id
                            })}
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            disabled={product.inStock === 0}
                            className={buttonClass}
                            onClick={() => dispatch({
                                type: 'ADD_TO_CART',
                                payload: product,
                            })}
                        >
                            {!product.inStock ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    )
                }
            </div>

        </div>
    );
};
export default ProductPreview;