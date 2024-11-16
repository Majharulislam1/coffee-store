import logo from '../assets/more/logo1.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import backgroundImage from '../assets/more/13.jpg'
import backgroundImage2 from '../assets/more/24.jpg'




const Footer = () => {

    return (

        <>

        <div   style={{ backgroundImage: `url(${backgroundImage})` }} className='py-8'>
              <div className="w-4/5 mx-auto">
                   <div className="grid grid-cols-2">
                       <div>
                            <img width={'75px'} src={logo} alt="" />

                            <h1 className='text-3xl font-semibold text-[#331A15] font-Rancho py-4'>Espresso Emporium</h1>
                             
                             <p className='pb-3'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                             <h2 className='text-2xl font-Rancho pb-4 font-semibold text-[#331A15]'>Get in Touch</h2>

                             <p className='flex items-center'> <FaPhoneAlt className='mr-4'/> +88 01533 333 333</p>
                             <p className='flex items-center'> <IoMdMail className='mr-4'/> info@gmail.com</p>
                             <p className='flex items-center'> <FaLocationDot className='mr-4'/> 72, Wall street, King Road, Dhaka</p>
                          
                       </div>
                       <div className='p-7'>

                           <h1 className='text-3xl font-Rancho font-semibold mb-4'>Connect with Us</h1>
                           <input className='border focus:border focus:outline-none w-1/2 py-1 rounded-lg mb-3' type="email" name="" id="" />
                           <br />
                           <input className='border focus:border focus:outline-none w-1/2 py-1 rounded-lg mb-3' type="email" name="" id="" />
                           <br />
                           <textarea className='border focus:border focus:outline-none w-1/2 py-1 rounded-lg mb-3'   rows={5} name="" id=""></textarea>
                           <br />
                           <button className='border-2 border-[#331A15] px-4 py-2 font-semibold font-Rancho rounded-full'>Send Message</button>
                       </div>
                   </div>
              </div>
        </div>
        <div style={{ backgroundImage: `url(${backgroundImage2})` }} className='py-2'>
                <h1 className='font-bold text-xl font-Rancho text-center text-white'>Copyright Espresso Emporium ! All Rights Reserved</h1>
        </div>
        </>
    );
};

export default Footer;