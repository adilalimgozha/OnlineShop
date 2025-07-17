import getProducts from '../api/getProducts'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import "../styles/Home.css"

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const allProducts = useSelector(state => state.products.value)
  const categories = allProducts.map(prod => prod.category)
  const uniqcategories = [...new Set(categories)]

  const toggleDropBtn = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    getProducts()
  }, [])

  console.log(allProducts)
  
  return (
    <div className='home'>

    <div className='dropdown'>
      <button className='dropbtn' onClick={toggleDropBtn}>Select Category</button>
      <div className={`dropdown-content ${isOpen ? 'open' : ""}`}>
        {uniqcategories.map((category, index) => <li key={index} className='dropdown-element'>{category}</li>)}
      </div>
    </div>
      
     {allProducts.map(product =>
      <ProductCard key={product.id} product={product} />
     )}
    </div>
  )
}

