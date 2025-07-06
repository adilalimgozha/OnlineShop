import { useParams } from "react-router"
import { useSelector } from "react-redux"

export default function ProductDetail() {

    let {prodId} = useParams()
    const allProducts = useSelector(state => state.products.value)
    const prod = allProducts.find(prod => prod.id === Number(prodId))


    return (
        <div>
        {prod.id} <br/>
        {prod.title}
        </div>
    )
}
