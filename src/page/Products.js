import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Cards } from "../components/Cards"
import { Loading } from "../components/Loading"


// fetching api resource - products
function Product(){
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([{
        "id": 1,
        "title": "Default title",
        "images": [
            "https://picsum.photos/640/640?r=4368",
          ]
    }])
    // function to get data from api
    const getProducts = () => {
        fetch("https://api.escuelajs.co/api/v1/products?limit=20&offset=1")
        .then(resp => resp.json())
        .then(resp => {
            setProducts(resp)
            setLoading(false) 
            // loading is set to false when data response 
        })
    }
    // when page load
    useEffect(() => {
        console.log(" in use effect")
        getProducts()
    }, [])
    return(
        <div className="container mt-5">
            <h1 className="mb-3">TOP PRODUCT</h1>
            <div className="row g-3">
                {
                    loading ? <Loading /> : products.map(product => (
                        <div className='col-12 col-sm-6 col-md-3'>
                            <Link to={`/products/${product.id}`} className="text-decoration-none">
                                <Cards title={product.title} thumbnail={product.images[0]} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Product;