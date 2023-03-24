import { Link } from "react-router-dom";
import { FaCaretRight, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return ( 
        <div className="contact h-max bg-black">
            <div className="body lg:flex p-4 mt-7 lg:justify-around lg:mx-auto lg:px-auto lg:max-w-6xl lg:mt-10">
                <div className="space-y-4 w-full pt-7 lg:overflow-y-auto lg:w-1/2 lg:py-2">
                    <h1 className="glock flex space-x-2 text-white text-2xl lg:text-4xl"><span><FaCaretRight className="text-teal-600"/></span><b  id="txtHead" class="ease-in duration-500" >Contact Us</b></h1>
                    <p className="glock text-white text-lg text-justify ease-in duration-500">Want to report an issue? Don't hesitate to reach out using the form below. reach us on 
                        any of our social media accounts or just send an e-mail
                    </p>
                    <p class="flex space-x-4 lg:space-x-10 text-lg lg:text-xl">
                        <Link to="#"><FaTwitter className="text-2xl text-white hover:text-teal-600 ease-in duration-500"/></Link>
                        <Link to="#"><FaInstagram className="text-2xl text-white hover:text-teal-600 ease-in duration-500"/></Link>
                    </p>
                    <p class="glock text-lg text-teal-600 text-justify">puppySale@yahoo.com</p>
                    <div class="py-2 lg:hidden">
                        <form action="">
                            <input className="w-full text-black p-2 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                                placeholder="Name"/> <br/>
                            <input className="w-full text-black p-2 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="email"
                                placeholder="Email"/> <br/>
                            <textarea className="w-full text-black p-2 placeholder:-translate-y-0 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                                rows="10" cols="5" placeholder="Your feedback"></textarea> <br/>
                            <button id="txtBod6"
                                className="glock text-gray-50 w-full p-2 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4">Send message</button>
                        </form>
                    </div>
                </div>
                <div class="p-2 hidden lg:block lg:w-2/5">
                    <form>
                        <input className="w-full text-black p-2 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                            placeholder="Name"/> <br/>
                        <input className="w-full text-black p-2 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="email"
                            placeholder="Email"/> <br/>
                        <textarea className="w-full text-black p-2 border-2 border-teal-600 bg-gray-700 rounded-lg ease-in duration-500 mt-4" type="text"
                            rows="10" cols="5" placeholder="Your feedback"></textarea> <br/>
                        <button
                            className="glock text-gray-50 w-full p-2 text-lg border-2 border-teal-600 bg-teal-600 rounded-lg ease-in duration-500 mt-4">Send message</button>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;