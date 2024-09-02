import './Products.css';

export default function Products({ products }) {
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
              <button>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
