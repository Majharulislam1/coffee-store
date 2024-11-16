import backgroundImage from '../assets/more/3.png'
import cup from '../assets/icons/1.png';
import badge from '../assets/icons/2.png';
import coffee from '../assets/icons/3.png';
import coffee_cup from '../assets/icons/4.png'

 
 


const Hero = () => {
    return (
        <>
            <div>
                <div className='py-36 h-[80vh] justify-center items-center bg-no-repeat bg-cover bg-center flex'
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <div className='w-1/2'></div>
                    <div className='w-5/12 p-4 py-10'>
                        <h1 className='font-Rancho font-semibold text-4xl py-4 text-white'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='pb-3 text-white'> Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className=' bg-[#E3B577] px-4 text-xl py-3 font-Rancho'>Learn More</button>
                    </div>
                </div>


                <div className='bg-[#ECEAE3]'>
                    <div className='w-4/5 mx-auto'>
                        <div className='grid grid-cols-4 gap-8 py-6'>

                            <div>
                                <div className='py-3'>
                                    <img src={cup} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#331A15] font-semibold text-2xl font-Rancho pb-2'>Awesome Aroma</h1>
                                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                                </div>
                            </div>
                            <div>
                                <div className='py-3'>
                                    <img src={badge} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#331A15] font-semibold text-2xl font-Rancho pb-2'>High Quality</h1>
                                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                                </div>
                            </div>
                            <div>
                                <div className='py-3'>
                                    <img src={coffee} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#331A15] font-semibold text-2xl font-Rancho pb-2'>Pure Grades</h1>
                                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                                </div>
                            </div>
                            <div>
                                <div className='py-3'>
                                    <img src={coffee_cup} alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#331A15] font-semibold text-2xl font-Rancho pb-2'>Proper Roasting</h1>
                                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>



            </div>
        </>
    );
};

export default Hero;