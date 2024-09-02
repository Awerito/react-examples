import './App.css'
import { products as initialProducts } from './mocks/products.json'
import Products from './components/Products'
import Filters from './components/Filters'
import { useState } from 'react'

function App() {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    price: 0
  })

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        (filters.category === 'all' || product.category === filters.category) &&
        (filters.price === 0 || product.price >= filters.price)
      )
    })
  }

  return (
    <>
      <h1>Shoping Cart</h1>
      <Filters filters={filters} changeFilters={setFilters} />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
