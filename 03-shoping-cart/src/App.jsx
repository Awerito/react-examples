import './App.css'
import products from './mocks/products.json'
import Products from './components/Products'

function App() {
  return (
    <>
      <h1>Shoping Cart</h1>
      <Products products={products.products} />
    </>
  )
}

export default App
