import './Products.css';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export default function Products({ products }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.description} />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button onClick={() => addToCart(product)}>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
