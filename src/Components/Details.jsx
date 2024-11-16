import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from 'react-router-dom';
import backgroundImage from'../assets/more/11.png';


const Details = () => {
    

    const coffee = useLoaderData();
    const {category,chef,coffeeName,details,photo,taste,supplier} = coffee;

    return (
        <>
            <div style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="w-4/5 mx-auto">
                   <Link to={'/'}>
                   <h1 className="py-10 text-2xl flex items-center font-Rancho font-semibold">
                    <FaArrowLeft className="mr-2" /> Back to home
                    </h1>
                   </Link>
                <div className="bg-[#F4F3F0] rounded-lg my-4">
                    <div className="grid grid-cols-2 py-10 items-center">
                        <div className='justify-self-center'>
                            <img src={photo} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-Rancho font-bold mb-4 text-[#331A15]'>{coffeeName}</h1>
                            <div>
                                <p> <span className='font-bold text-[#331A15]'>Name: </span> {coffeeName}</p>
                                <p><span className='font-bold text-[#331A15]'>Chef:</span> {chef}</p>
                                <p><span className='font-bold text-[#331A15]'>Supplier:</span>  {supplier}</p>
                                <p><span className='font-bold text-[#331A15]'>Taste:</span>  {taste}</p>
                                <p><span className='font-bold text-[#331A15]'>Category:</span>  {category}</p>
                                <p><span className='font-bold text-[#331A15]'> Details: </span> {details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Details;