import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import swal from 'sweetalert';
import backgroundImage from'../assets/more/11.png';
const Update = () => {


      const coffee = useLoaderData();
      const {_id,coffeeName,chef,supplier,taste,category,details,photo,price} = coffee;



      const handleUpdateValue = (e)=>{
        e.preventDefault();
        const coffeeName = e.target.name.value;
        const chef = e.target.chef.value;
        const supplier = e.target.supplier.value;
        const taste = e.target.taste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;

        const UpdateCoffee ={coffeeName,chef,supplier,taste,category,details,photo,price};

      
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount===1){
                swal({
                    title: "Good job!",
                    text: "Updated Successfully",
                    icon: "success",
                    button:false
                  });
            }
        })
        






         
      }



    return (
        <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="w-4/5 mx-auto">
           <Link to={'/'}>
           <h1 className="py-10 text-2xl flex items-center font-Rancho font-semibold">
            <FaArrowLeft className="mr-2" /> Back to home
            </h1>
           </Link>

            <div className="py-8 bg-[#F4F3F0] m-6 rounded-lg">
                <div className="py-8">
                <h1 className="text-2xl text-center font-semibold font-Rancho py-4 text-[#374151]">Update Existing Coffee Details</h1>
                <p className="w-3/5 text-center mx-auto">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateValue} className="font-[sans-serif] max-w-4xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="relative flex items-center">
                            <input type="text" placeholder="Coffee Name" name="name" defaultValue={coffeeName}
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                             
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" placeholder="Chef" defaultValue={chef} name="chef"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                            
                        </div>
                        <div className="relative flex items-center">
                            <input type="text" placeholder="Supplier" defaultValue={supplier} name="supplier"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                           
                        </div>

                        <div className="relative flex items-center">
                            <input type="text" placeholder="Taste" defaultValue={taste} name="taste"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                             
                        </div>

                        <div className="relative flex items-center">
                            <input type="text" placeholder="Category" defaultValue={category} name="category"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                             
                        </div>

                        <div className="relative flex items-center">
                            <input type="text" placeholder="Details" defaultValue={details} name="details"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                            
                        </div>
                        <div className=" flex flex-col col-span-2">
                                    <input type="text" name="price" placeholder="Coffee Price" defaultValue={price} 
                                        className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                                     
                                </div>
                        <div className=" flex flex-col col-span-2">
                            <label htmlFor="photo">Photo url:</label>
                            <input type="text" placeholder="Photo Url" defaultValue={photo} name="photo"
                                className="px-4 py-3 bg-[#f0f1f2] focus:bg-transparent text-black w-full text-sm border outline-[#D2B48C] rounded transition-all" />
                             
                        </div>
                    </div>

                    <button  type="submit"
                        className="mt-8 px-6 py-2.5 text-sm w-full bg-[#D2B48C] font-Rancho font-bold text-[#331A15] rounded transition-all">Update Coffee Details</button>
                </form>
            </div>

        </div>
    </div>
    );
};

export default Update;