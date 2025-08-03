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
  const [currentPage, setCurrentPage] = useState(1)

  let content
  let prodNum
  let pages
  let buttons = []

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

  const handleNextPage = () => {
    if (currentPage < pages){
      setCurrentPage(page => page + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1){
      setCurrentPage(page => page - 1)
    }
  }

  const handlePageChange = (num) =>{
    setCurrentPage(num)
  }

  useEffect(() => {
    getProducts()
  }, [])

  if (category.length != 0){
    content = allProducts.filter(prod => prod.category === category)
  }else{
    content = allProducts
  }

  prodNum = content.length
  pages = Math.ceil(prodNum / 2)
  for (let i=1; i <= pages; i++){
        buttons.push(i)
     }

  const startIndex = (currentPage - 1) * 2
  const curretnItems = content.slice(startIndex, startIndex+2)

  console.log(currentPage)

  console.log(allProducts)
  console.log('cat', content)
  
  return (
    <div className='home'>

    <div className='dropdown'>
      <div>Select Category </div>
      <button className='dropbtn' onClick={toggleDropBtn}>{categoryWord}</button>
      <button className='clearbtn' onClick={clearCategory}><img className='clearbtn-img' src="broom.png" alt="clear button" /></button>
      <div className={`dropdown-content ${isOpen ? 'open' : ""}`}>
        {uniqcategories.map((category, index) => <li key={index} className='dropdown-element' onClick={() => changeCategory(category)}>{category}</li>)}
      </div>
    </div>
      
     {curretnItems.map(product =>
      <ProductCard key={product.id} product={product} />
     )}

     <div>
      <button onClick={handlePrevPage}>Prev</button>
      {buttons.map(button => 
        <button onClick={() => handlePageChange(button)} key={button}>{button}</button>
      )}
      <button onClick={handleNextPage}>Next</button>
     </div>
    </div>
  )
}

