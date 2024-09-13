import './Filters.css';
import { useState } from 'react';

export default function Filters({ filters, changeFilters }) {
  const [minPrice, setMinPrice] = useState(filters.price);

  const handlePriceChange = (event) => {
    setMinPrice(event.target.value);
    changeFilters((prevFilters) => ({
      ...prevFilters,
      price: Number(event.target.value),
    }));
  }

  const handleCategoryChange = (event) => {
    changeFilters((prevFilters) => ({
      ...prevFilters,
      category: event.target.value,
    }));
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          value={minPrice}
          onChange={handlePriceChange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}
