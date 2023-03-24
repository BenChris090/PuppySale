import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Dog = () => {
    const [dog, setDog] = useState([]);
    let alte = dog.dog + 'pic'
    let params = useParams();
    const navigate = useNavigate()
    const go_back = () => {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchDogs () {
            const { data } = await axios.get(`http://127.0.0.1:8000/api/dogs/${params.id}`)
            setDog(data)
        }
        fetchDogs()

    }, [params.id]
    )
    
    return ( 
        <div className="dog p-4 h-full overflow-y-auto lg:overflow-y-hidden">
            <div className="py-2">
                <button className="p-2 gloock bg-gradient-to-r from-cyan-500 to-teal-600 rounded-2xl text-xl lg:text-2xl hover:scale-110" onClick={go_back}>Go Back</button>
            </div>
            <div className=" space-y-4 space-x-auto lg:flex">
                    <img src={dog.photo} className=" w-full lg:w-1/3 max-h-96" alt={alte} />
                <div className="w-full lg:w-auto">
                    <table className="w-full border-collapse border-y-2 table-auto lg:w-auto">
                        <thead>
                            <tr className="border-y-2">
                                <th className="p-2 text-white text-2xl lg:text-3xl ">{dog.dog}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-y-2">                                
                                <td className="p-2 text-white text-xl lg:text-2xl ">Price: {dog.price}</td>
                            </tr>
                            <tr className="border-y-2">                                
                                <td className="p-2 text-white text-xl lg:text-2xl ">Age: {dog.age} old</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="w-2/3 lg:w-1/3 lg:mx-auto">
                    <table className="w-full border-collapse table-auto">                     
                        <tbody>
                            <tr className="border-2">                                
                                <td className="p-2 text-white text-xl lg:text-2xl">Price:</td>
                                <td className="p-2 text-white text-xl text-right lg:text-2xl">{dog.price}</td>
                            </tr>
                            <tr className="border-2">                                
                                <td className="p-2 text-white text-xl lg:text-2xl ">Status:</td>
                                <td className="p-2 text-white text-xl text-right lg:text-2xl ">{dog.in_stock}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
     );
}
 
export default Dog;