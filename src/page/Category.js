import { useEffect, useState } from "react"
import { Loading } from "../components/Loading"
import { Link } from "react-router-dom"
import { Cards } from "../components/Cards"



export default function Category(){
    const [categories, setCategories] = useState([{}])
    const [loading, setLoading] = useState(true)
    const fetchCategories = () => {
        fetch("https://api.escuelajs.co/api/v1/categories/")
        .then(res => res.json())
        .then(res => {
            setCategories(res)
            setLoading(false)
            
            // loading is set to false when data response 
        })
    }
    useEffect(() =>{
        fetchCategories()
    },[])
    return(
        <div className="container mt-5">
            <h1 className="mb-3">Top Category</h1>
            <div className="row g-3">
                {
                    loading ? <Loading /> : categories.map(categories => (
                        <div className='col-12 col-sm-6 col-md-3'>
                            <Link to={`/products/${categories.id}`} className="text-decoration-none">
                                <Cards title={categories.name} thumbnail={categories.image} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}