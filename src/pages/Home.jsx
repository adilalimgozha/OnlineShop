import getProducts from '../api/getProducts'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'
import "../styles/Home.css"

export default function Home() {

  const allProducts = useSelector(state => state.products.value)

  useEffect(() => {
    getProducts()
  }, [])

  console.log(allProducts)
  
  return (
    <div className='home'>
      
     {allProducts.map(product =>
      <ProductCard key={product.id} product={product} />
     )}
    </div>
  )
}

