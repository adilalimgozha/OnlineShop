import getProducts from '../api/getProducts'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

  const allProducts = useSelector(state => state.products.value)

  useEffect(() => {
    getProducts()
  }, [])

  console.log(allProducts)
  
  return (
    <div>
     {allProducts.map(product =>
      <li key={product.id}>{product.title}</li>
     )}
    </div>
  )
}

