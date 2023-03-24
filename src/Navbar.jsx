import { Link, NavLink } from "react-router-dom";
import { FaBars, FaMinusCircle, FaMoon, FaSearch, FaShoppingCart, FaSun, FaTimes } from "react-icons/fa"
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
    let PS_LOGO =  require('./Puppy_Sales_Logo1.png');
    let Boerboel =  require('./Boerboel.png');
    const [mNav, setmNav] = useState("none")
    const [sBar, setsBar] = useState("none")
    const [cart, setCart] = useState("none")
    const { theme, toggleTheme } = useTheme();
    

    const toggleNav = () => {
        if (mNav === "none"){
            setmNav("block")
        }else{
            setmNav("none")
        };
    }

    const toggleSearch = () => {
        if (sBar === "none"){
            setsBar("block")
        }else{
            setsBar("none")
        };
    }

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

    const setSearch = () => {
        toggleSearch()
        document.getElementById("search").style.display = sBar
    }
    const setNav = () => {
        toggleNav()
        document.getElementById("mNav").style.display = mNav
    }
    
    return ( 
        <div>
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
                        <h1 className='flex text-black my-auto lg:text-xl'>$999.00</h1>
                        <FaMinusCircle className="text-lg text-red-600 my-auto lg:text-xl"></FaMinusCircle>
                    </div>
                </div>
                <div className="cartFooter">
                    <div className="total text-white text-right p-2 border-t-2">
                        <h1 className="px-2 lg:text-xl">Sub-Total <span className="ml-6">$999.00</span></h1>
                        <h1 className="px-2 lg:text-xl">Total <span className="ml-6">$999.00</span></h1>
                    </div>
                    <div className="buttons p-2 text-center space-x-4 ml-auto border-t-2 ">
                        <button className="text-white bg-cyan-500 p-2 rounded-md">VIEW CART</button>
                        <button className="text-white bg-teal-600 p-2 rounded-md">CHECKOUT</button>
                    </div>
                </div>
            </div>
            <nav className="flex p-2 bg-black">
                {/* mobile nav starts here */}
                <div id="mNav" className="h-screen w-96 hidden z-0 fixed left-0 top-0 bg-black overflow-x-hidden pt-28 ease-in duration-500">
                    <FaTimes className="text-xl text-teal-600 absolute top-5 right-8" onClick={setNav}/>
                    <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F'})}  className="mt- text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>HOME</NavLink>
                    <NavLink to="/shop" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F'})}  className="mt-7 text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>SHOP</NavLink>
                    <NavLink to="/features" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F',})}  className="mt-7 text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>ACCESSORIES</NavLink>
                    <NavLink to="/blogs" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F',})}  className="mt-7 text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>BLOGS</NavLink>
                    <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F'})}  className="mt-7 text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>ABOUT</NavLink>
                    <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#2F4F4F'})}  className="mt-7 text-center space-y-2 block hover:text-teal-600 ease-in duration-500 text-xl"  onClick={setNav}>CONTACT</NavLink>
                </div>
                <Link to="/" className="flex items-center"><img src={ PS_LOGO } className="h-10 mr-2 sm:h-10 lg:h-14" alt="Logo" /><h1 className="self-center text-xl font-semibold whitespace-nowrap text-teal-600 lg:text-3xl"><b>PUPPY</b><span className=""> SALES</span></h1></Link>
                <div className="bars space-x-2 flex items-center ml-24">
                    <FaSearch className="text-xl flex text-teal-600 my-2 lg:hidden" onClick={setSearch}></FaSearch>
                    <FaShoppingCart className="text-xl flex text-teal-600 my-2 lg:hidden" onClick={setCartV}></FaShoppingCart>
                {
                    theme === "dark"
                    ? <FaSun className="text-xl flex text-teal-600 my-2 lg:hidden" onClick={toggleTheme}></FaSun>
                    : <FaMoon className="text-xl flex text-teal-600 my-2 lg:hidden" onClick={toggleTheme}></FaMoon>
                }
                    <FaBars className="text-xl flex text-teal-600 my-2 lg:hidden" onClick={setNav}/>
                </div>
                {/* mobile nav ends here */}
                <div className="links hidden items-center mx-auto text-center lg:flex lg:py-auto lg:space-x-8">
                    <NavLink to="/" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className="text-sm text-gray-200 hover:text-teal-600 ease-in duration-500"><b>HOME</b></NavLink>
                    <NavLink to="/shop" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className="text-sm text-gray-200 hover:text-teal-600 ease-in duration-500"><b>SHOP</b></NavLink>
                    <NavLink to="/features" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className="flex text-gray-200 text-sm hover:text-teal-600 ease-in duration-500"><b>ACCESSORIES</b></NavLink>
                    <NavLink to="/blogs" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className="flex text-gray-200 text-sm hover:text-teal-600 ease-in duration-500"><b>BLOGS</b></NavLink>
                    <NavLink to="/about" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className="flex text-gray-200 text-sm hover:text-teal-600 ease-in duration-500"><b>ABOUT</b></NavLink>
                    <NavLink to="/contact" style={({ isActive }) => (isActive ? {color: '#00897B'} : {color: '#A9A9A9'})} className=" text-gray-200 text-sm hover:text-teal-600 ease-in duration-500"><b>CONTACT</b></NavLink>
                </div>
                <div className="icons hidden items-center text-center lg:flex lg:py-auto lg:ml-auto lg:space-x-8">
                    <FaSearch className="text-xl flex text-teal-600 my-2" onClick={setSearch}></FaSearch>
                    <FaShoppingCart className="text-xl flex text-teal-600 my-2" onClick={setCartV}></FaShoppingCart>
                    <FaSun style={(theme === "dark" ? {display: 'flex'} : {display: 'none'})} className="text-xl flex text-teal-600 my-2" onClick={toggleTheme}></FaSun>
                    <FaMoon style={(theme === "dark" ? {display: 'none'} : {display: 'flex'})} className="text-xl flex text-teal-600 my-2" onClick={toggleTheme}></FaMoon>
                </div>
            </nav>
            <div id="search" className="hidden bg-white w-full p-2 justify-around bg-opacity-50">
                <form action="" method="post" className="flex px-auto justify-center">
                    <select name="category" id="" className="text-teal-600 border-2 border-teal-600 bg-white px-1">
                        <option value="All"><b>All</b></option>
                        <option value="Mastiffs"><b>Mastiffs</b></option>
                        <option value="Alsatians"><b>Alsatians</b></option>
                        <option value="Terriers"><b>Terriers</b></option>
                    </select>
                    <input type="text" placeholder="Search here....." className="w-2/3 text-white bg-teal-600 px-4 lg:w-4/6"/>
                    <div className="bg-white border-2 border-teal-600 p-3">
                        <FaSearch className="text-lg flex text-teal-600 lg:text-xl"></FaSearch>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Navbar;