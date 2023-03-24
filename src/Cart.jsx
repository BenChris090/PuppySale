import { useState } from 'react';
import { FaTimes } from "react-icons/fa"

const Cart = () => {
    let Boerboel =  require('./Boerboel.png');
    const [cart, setCart] = useState("none");


    const toggleCart = () => {
        if (cart === "none"){
            setCart("block")
        }else{
            setCart("none")
        };
    }

    const setCartV = () => {
        toggleCart()
        document.getElementById("cart").style.display = cart
    }

    return ( 
        <div id='cart' className="hidden h-screen w-full z-50 fixed top-0 right-0 bg-black overflow-y-auto lg:w-1/2">
            <div className="flex justify-between p-4">
                <h1 className="text-xl text-teal-600"><b>YOUR CART</b></h1>
                <FaTimes className="text-xl text-teal-600 my-auto" onClick={setCartV}/>
            </div>
            <div className="item flex justify-between border-t-2 space-x-2 p-2">
                <div className='flex p-2 w-1/2 overflow-hidden'>
                    <img src={ Boerboel } className=" h-20 sm:h-20 lg:h-32" alt="Dog Pic" />
                    <h1 className=' p-2 text-black borber-b-2 lg:text-2xl'><b>Mastiffs</b><br /><span>
                    <h1 className='block text-black lg:text-xl'>Boerboel</h1>
                    </span></h1>
                </div>
                <div className="flex p-2 space-x-2 overflow-hidden">
                    <h1 className='flex text-black mx-auto my-auto lg:text-xl'>x1</h1>
                </div>
                <div className="flex justify-end p-2 w-2/6 space-x-2 overflow-hidden">
                    <h1 className='flex text-black my-auto lg:text-xl'>N150,000</h1>
                    <FaMinusCircle className="text-lg text-red-600 my-auto lg:text-xl"></FaMinusCircle>
                </div>
            </div>
            <div className="cartFooter">
                <div className="total text-white text-right p-2 border-t-2">
                    <h1 className="px-2 lg:text-xl">Sub-Total <span className="ml-6">$999.00</span></h1>
                    <h1 className="px-2 lg:text-xl">Total <span className="ml-6">$999.00</span></h1>
                </div>
                <div className="buttons p-2 text-center space-x-4 ml-auto border-t-2 ">
                    <button className="text-white bg-cyan-600 p-2 rounded-md">VIEW CART</button>
                    <button className="text-white bg-teal-600 p-2 rounded-md">CHECKOUT</button>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;