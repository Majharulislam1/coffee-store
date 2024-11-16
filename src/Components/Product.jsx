import { FaEye } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ coffee,handleDelete }) => {

    const { coffeeName, _id, photo, price, chef } = coffee;

    return (
        <div>
            <div className='flex items-center justify-between bg-[#F5F4F1] p-6 rounded-lg'>
                <div>
                    <img src={photo} alt="" />
                </div>
                <div>
                    <p className='pb-1'> <span className='text-[#331A15]'>Name :</span> {coffeeName}</p>
                    <p className='pb-1'> <span className='text-[#331A15]'>Chef :</span> {chef}</p>
                    <p > <span className='text-[#331A15]'>Price :</span> {price} Taka</p>
                </div>
                <div>
                    <Link to={`/details/${_id}`}>
                        <button className='bg-[#D2B48C] p-3 rounded-lg text-white text-lg mb-4'>
                            <FaEye />
                        </button>
                    </Link>
                    <br />
                    <Link to={`/update/${_id}`}>
                    <button className='bg-[#3C393B] p-3 rounded-lg text-white text-lg mb-4'>
                        <IoPencil />
                    </button>
                    </Link>
                    <br />
                    <button onClick={()=>handleDelete(_id)} className='bg-[#EA4744] p-3 rounded-lg text-white text-lg'>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;