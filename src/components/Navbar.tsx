import { Dispatch, useState } from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

import { CartState } from '../context/CartContext';
import { ProductType } from '../types/ProductType';

type Cart = {
    state: {
        products: ProductType[],
        cart: ProductType[];
    };
    dispatch: Dispatch<any>;
};

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const toggleClass = isShow ? '' : 'hidden';

    const { state: { cart }, dispatch }: Cart = CartState();

    return (
        <nav className="bg-white border-b border-solid-gray-200 md:px-4 lg:px-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src/assets/vite.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ShoppiZ
                    </span>
                </Link>
                {/* Search Filter */}
                <div className="items-center justify-between flex md:w-auto" id="navbar-search">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                </div>
                {/* Cart button */}
                <button
                    onClick={() => setIsShow(!isShow)}
                    className="relative p-2 flex text-sm bg-green-700 rounded-full md:me-0 active:ring-4 active:ring-gray-300"
                >
                    <FaShoppingCart style={{ color: 'white', fontSize: '25px' }} />
                    {cart.length > 0 &&
                        <div className='absolute left-6 top-6 rounded-full font-bold text-white w-8 h-8 bg-red-600 flex justify-center items-center'>
                            {cart.length}
                        </div>
                    }
                </button>
                {/* Cart Menu */}
                <div className={`${toggleClass} z-50 absolute right-0 top-14 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow`}>
                    <div className="px-4 py-3">
                        <span className="font-bold block text-sm text-gray-900">
                            Cart {cart.length <= 0 && 'is Empty'}
                        </span>
                        {cart.length > 0 &&
                            cart.map((product: ProductType) => (
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
            </div>
        </nav>

    );
};
export default Navbar;