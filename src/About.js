import { Link } from "react-router-dom";
import { FaCaretRight, FaInstagram, FaTwitter } from "react-icons/fa";

const About = () => {
    
    let PS_LOGO =  require('./Puppy_Sales_Logo1.png');

    return ( 
        <div className="about h-max bg-black">
            <div className="flex p-4 mt-7 space-x-4 lg:justify-around lg:mx-auto lg:px-auto lg:max-w-6xl lg:mt-10">
                <div className="space-y-4 w-full pt-7 lg:overflow-y-auto lg:w-1/2 lg:py-2">
                    <h1 className="glock flex space-x-2 text-white text-2xl lg:text-4xl"><span><FaCaretRight className="text-teal-600"/></span><b>About_Us</b></h1>
                    <p className="glock text-white text-lg text-justify">Hello There, welcome to Puppy_Sale, we are a very dedicated and improvement prone puppy sale business with less than 1 year of incorporation,
                        we are also a Tech based business which is always curious and ready to learn and solve any problems being faced by Dog lovers out there. We enjoy innovating off ideas from our customers,
                        because it helps assimilate different perspectives into our business. Check out some of our available products in the <span class="text-teal-600"><b>Shop</b></span> page.
                    </p>
                    <p className="glock text-white text-lg text-justify">We specialize in the sale and delivery of various special breeds of dogs aswell as dog accessories which include feeds, bowls,
                        leash and collars, bows and toys e.t.c.
                    </p>
                    <p className="glock text-white text-lg text-justify">Do well to recommend our site to any Dog lovers around you who may be in search of any of our <span class="text-teal-600"><b>products</b></span> or <span class="text-teal-600"><b>services.</b></span></p>
                    <p class="glock text-teal-600 text-lg lg:text-xl">View Our Socials: <span><i id="txtBod3" class="fab fa-github fa-x text-black hover:text-cyan-500 ease-in duration-500"></i></span></p>
                    <p class="flex space-x-4 lg:space-x-10 text-lg lg:text-xl">
                        <Link to="#"><FaTwitter className="text-2xl text-white hover:text-teal-600 ease-in duration-500"/></Link>
                        <Link to="#"><FaInstagram className="text-2xl text-white hover:text-teal-600 ease-in duration-500"/></Link>
                    </p>
                    <div class="p-2 lg:hidden">
                        <img src={PS_LOGO} alt="Logo"/>
                    </div>
                </div>
                <div class="p-2 hidden lg:block lg:w-2/5 lg:h-96">
                    <img src={PS_LOGO} alt="Logo"/>
                </div>
            </div>
        </div>
     );
}
 
export default About;