import { NavLink } from 'react-router-dom';


const Home = () => {
    let Boerboel =  require('./Boerboel.png');
    let Shepherd = require('./German_Shepherd.png');
    let PitBull = require('./PitBulls.png');

    return ( 
        <div className="home overflow-y-auto">
            <div className="tops p-4 bg-gradient-to-r from-cyan-500 to-teal-600 px-auto lg:flex">
                <div className='mb-2 py-5 text-center lg:w-1/2 lg:pt-28 overflow-hidden'>
                    <p><b>Your No. 1 Dog Haven</b></p>
                    <h1 className='gloock text-4xl hover:scale-110 lg:text-6xl'>NEW ARRIVALS</h1>
                    <NavLink to='/shop'><button className='mt-2 p-2 rounded-xl bg-gray-100 text-teal-600 hover:scale-110 '><b>Shop Now</b></button></NavLink>
                </div>
                <img src={ Boerboel } className=" h-52 mx-auto sm:h-48 lg:h-96" alt="Dog Pic" />
            </div>
            <div className="categories p-4 space-y-2 bg-white lg:flex lg:justify-between lg:space-y-0">
                <NavLink to={'/dogs/Mastiff'}>
                    <div className="mastiffs p-2 my-2 border-2 lg:h-44 border-teal-600 hover:scale-105 lg:flex lg:space-x-2">
                        <div className='mb-2 pt-2 lg:pt-5 text-center lg:w-1/2 overflow-hidden'>
                            <h1 className='text-2xl p-2 text-black'>Mastiffs</h1>
                        </div>
                        <img src={ Boerboel } className=" h-40 mx-auto" alt="Mastiff Pic" />
                    </div>
                </NavLink>
                <NavLink to='/dogs/Alsatian'>
                    <div className="alsatians p-2 my-2 border-2 lg:h-44 border-teal-600 hover:scale-105 lg:flex lg:space-x-2">
                        <div className='mb-2 pt-2 lg:pt-5 text-center lg:w-1/2 overflow-hidden'>
                            <h1 className='text-2xl p-2 text-black'>Alsatians</h1>
                        </div>
                        <img src={ Shepherd } className=" h-40 mx-auto" alt="Alsatian Pic" />
                    </div>
                </NavLink>
                <NavLink to={'/dogs/Terrier'}>
                    <div className="terriers p-2 my-2 border-2 lg:h-44 border-teal-600 hover:scale-105 lg:flex lg:space-x-2">
                        <div className='mb-2 pt-2 lg:pt-5 text-center lg:w-1/2 overflow-hidden'>
                            <h1 className='text-2xl p-2 text-black'>Terriers</h1>
                        </div>
                        <img src={ PitBull } className=" h-40 mx-auto" alt="Terrier Pic" />
                    </div>
                </NavLink>
            </div>            
        </div>
     );
}
 
export default Home;