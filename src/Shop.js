import { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";

const Shop = () => {
    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        async function fetchDogs () {
            const { data } = await axios.get('http://127.0.0.1:8000/api/dogs/')
            setDogs(data)
            console.log(data)
        }
        fetchDogs()

    }, []
    )

    return ( 
        <div className="dogs p-4 h-full">
            <div className="header px-5 mb-2">
                <h1 className="glock text-3xl text-black lg:text-4xl">Latest Dogs</h1>
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                {dogs.map(dogg => (
                    <div className="card">
                        <Product product={dogg}/>
                    </div>       
                ))}
            </div>
        </div>
     );
}
 
export default Shop;