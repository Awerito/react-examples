import { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, clearCart } = useContext(CartContext);

  return (
    <>
      <label className='cart-button' htmlFor='cart'> 🛒 </label>
      <input id='cart' type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img
              src='https://via.placeholder.com/50'
              alt='IPhone 12 Pro Max'
            />

            <div>
              <strong>IPhone 12 Pro Max</strong> - $9.999,99
            </div>

            <footer>
              <small>Quantity: 1</small>
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button onClick={clearCart}>Clear cart</button>
      </aside>
    </>
  );
}
