import getProducts from '../api/getProducts'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router'

export default function Home() {

  const allProducts = useSelector(state => state.products.value)

  useEffect(() => {
    getProducts()
  }, [])

  console.log(allProducts)
  
  return (
    <div>
     {allProducts.map(product =>
      <Link to={`/product/${product.id}`} key={product.id}>{product.title}<br/></Link>
     )}
    </div>
  )
}

