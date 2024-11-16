
import cup from '../assets/cups/Rectangle 10.png'

const Coffee_cup = () => {
    return (
        <>
            <div className="text-center py-8">
                 <p className="pb-1">Follow Us Now</p>
                 <h1 className="text-[#331A15] text-4xl font-semibold font-Rancho">Follow on Instagram</h1>
            </div>

           <div className="w-4/5 mx-auto py-12">
                 <div className="grid grid-cols-4 gap-4">
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      <div>
                           <img className='w-full' src={cup} alt="" />
                      </div>
                      
                 </div>
           </div>

        </>
    );
};

export default Coffee_cup;