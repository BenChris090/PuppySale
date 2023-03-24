import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

const Dogs = () => {
    const [dogs, setDogs] = useState([]);
    let params = useParams();
    let srchDogs = [];

    useEffect(() => {
        async function fetchDogs () {
            const { data } = await axios.get('http://127.0.0.1:8000/api/dogs/')
            setDogs(data)
            console.log(data)
        }
        fetchDogs()

    }, []
    )
    dogs.map((dog) => {
        if(dog.category === params.category){
            srchDogs.push(dog)
        }
        }
    )

    return ( 
        <div className="dogs p-4 h-screen overflow-y-auto">
            { params.category && 
            <div className="header px-5 mb-2">
                <h1 className="glock text-2xl text-black lg:text-4xl">Latest {params.category}s</h1>
            </div>
            }
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                {srchDogs.map(dogg => (
                    <div className="card">
                        <Product product={dogg}/>
                    </div>       
                ))}
            </div>
        </div>
     );
}
 
export default Dogs;