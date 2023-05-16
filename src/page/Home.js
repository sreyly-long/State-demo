import {useState} from 'react';
import Product from './Products';

// state in hook - useState
function Home(){
    // define state
    const [count, setCount] = useState(0)
    const [products, setProducts] = useState(
        [
            {
                id: 1,
                title: "Apple Product - 1",
                thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_1280.jpg"
            },
            {
                id: 2,
                title: "Apple Product - 2",
                thumbnail: "https://cdn.pixabay.com/photo/2016/10/11/09/26/office-1730939_1280.jpg"
            }
        ]
    )
    return(
        <>
            <Product />
        </>
    )
}
export default Home;