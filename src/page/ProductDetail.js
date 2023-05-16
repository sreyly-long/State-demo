import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail(){
    const {id} = useParams()
    const [product, setProduct] = useState({
        id: 1,
        title: "",
        description: "",
        images: ["https://picsum.photos/640/640?r=801"]
    })
    // get product by id
    const fetchProduct = async (pid) =>{
        const resp = await fetch(`https://api.escuelajs.co/api/v1/products/${pid}`)
        return resp.json()
    }
    useEffect(() => {
        fetchProduct(id)
        .then(resp => setProduct(resp))
    })
    return (
        <main className="container">
            {/* <h1>{product.id}</h1> */}
            <h2 className="mt-3">{product.title}</h2>
            <p>{product.description}</p>
            <div>
                <img src={product.images[0]} alt="" />
            </div>
        </main>
    )
}