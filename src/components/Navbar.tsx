import { useState } from 'react';

import { FaShoppingCart } from "react-icons/fa";

import { AppState } from '../context/AppContext';
import CartMenu from './CartMenu';
import { Link } from 'react-router-dom';
import SearchFilter from './SearchFilter';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const {
        cartState: { cart },
        cartDispatch,
        filterState: { searchQuery },
        filterDispatch
    } = AppState();

    return (
        <nav className="bg-white border-b border-solid-gray-200 md:px-4 lg:px-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="src/assets/vite.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        ShoppiZ
                    </span>
                </Link>
                <SearchFilter filterDispatch={filterDispatch} searchQuery={searchQuery} />
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
                <CartMenu isShow={isShow} setIsShow={setIsShow} cart={cart} cartDispatch={cartDispatch} />
            </div>
        </nav>
    );
};
export default Navbar;