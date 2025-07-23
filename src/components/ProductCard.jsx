import { Link } from 'react-router'
import "../styles/ProductCard.css"

export default function ProductCard({product}) {

  return (
    <div className='card'>
      <Link to={`/product/${product.id}`} key={product.id}>
        <div>
            <img className='productImage' src={product.images} alt="product image" />
        </div>
        <div className='title'>
            <span className='name'>{product.title}</span>
        </div>
        <div className='description'>
            {product.description}
        </div>
        <div className='price'>
            ${product.price}
        </div>
      </Link>
    </div>
  )
}
