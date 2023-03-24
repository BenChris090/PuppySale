import { NavLink } from "react-router-dom";

const Product = ({product}) => {
    let alte = product.dog + 'pic'

    return ( 
        <div className="card my-3 p-3 bg-teal-600 space-y-2 w-72 h-52 rounded-2xl border-2 border-teal-900 hover:scale-105 mx-auto text-center lg:flex">
            <NavLink to={`/dog/${product.id}`} className="mx-auto">
                <img src={product.photo} className=" h-28 mx-auto" alt={alte} />
                <h1 className="glock text-xl text-gray-50">{product.dog}</h1>
                <h3 className="noto text-2xl text-gray-50">{product.price}</h3>
            </NavLink>
        </div>
     );
}
 
export default Product;