import { useEffect, useState } from "react"
import { Loading } from "../components/Loading"
import { Link } from "react-router-dom"
import { Cards } from "../components/Cards"



export default function It(){
    const [it, setIt] = useState([{}])
    const [loading, setLoading] = useState(true)
    const fetchit = () => {
        fetch("https://api.escuelajs.co/api/v1/categories/")
        .then(res => res.json())
        .then(res => {
            setIt(res)
            setLoading(false)
            
            // loading is set to false when data response 
        })
    }
    useEffect(() =>{
        fetchit()
    },[])
    return(
        <div className="container mt-5">
            <h1 className="mb-3">Top New</h1>
            <div className="row g-3">
                {
                    loading ? <Loading /> : it.map(it => (
                        <div className='col-12 col-sm-6 col-md-3'>
                            <Link to={`/products/${it.id}`} className="text-decoration-none">
                                <Cards title={it.name} thumbnail={it.image} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}