import { useEffect, useState } from 'react';

import { AppState } from '../context/AppContext';
import CartItem from '../components/CartItem';

const Cart = () => {

  const { cartState: { cart }, cartDispatch } = AppState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const cartTotal = cart.reduce((acc, curr) => acc + Number(curr.price) * Number(curr.qty), 0);
    setTotal(cartTotal);
  }, [cart]);

  return (
    <div className="flex mb-4">
      <div className="w-3/4 h-12">
        {cart.length === 0 && <h1 className='text-3xl'>Yout Cart is Empty...</h1>}
        {cart.length > 0 &&
          <ul className="w-full text-sm font-medium text-gray-900 bg-white  rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {cart.map(product => (
              <CartItem
                key={product._id}
                product={product}
                cartDispatch={cartDispatch}
              />
            ))}
          </ul>
        }
      </div>
      <aside className="w-1/4 text-white bg-gray-700 min-h-screen">
        <h2 className='md:text-2xl'>Subtotal ({cart.length}) Items</h2>
        <p className='mt-1 mb-4'>Total: ${total}</p>
        <button className='w-11/12 py-1'>Proceed to Check Out</button>
      </aside>
    </div>
  );
};
export default Cart;