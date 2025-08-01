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

  const [category, setCategory] = useState('')
  const [categoryWord, setCategoryWord] = useState('Select')
  let content

  const toggleDropBtn = () => {
    setIsOpen(!isOpen)
  }

  const changeCategory = (cat) => {
    setCategory(cat)
    setCategoryWord(cat)
    setIsOpen(!isOpen)
  }

  const clearCategory = () => {
    setCategory('')
    setCategoryWord('Select')
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (category.length != 0){
    content = allProducts.filter(prod => prod.category === category)
  }else{
    content = allProducts
  }

  console.log(allProducts)
  console.log('cat', content)
  
  return (
    <div className='home'>

    <div className='dropdown'>
      <div>Select Category </div>
      <button className='dropbtn' onClick={toggleDropBtn}>{categoryWord}</button>
      <button><img className='clearbtn' src="broom.png" alt="clear button" onClick={clearCategory} /></button>
      <div className={`dropdown-content ${isOpen ? 'open' : ""}`}>
        {uniqcategories.map((category, index) => <li key={index} className='dropdown-element' onClick={() => changeCategory(category)}>{category}</li>)}
      </div>
    </div>
      
     {content.map(product =>
      <ProductCard key={product.id} product={product} />
     )}
    </div>
  )
}

