
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import Product from './Product';
import Swal from 'sweetalert2'

const Products = () => {
    const [coffee, setCoffee] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/coffee')
            .then(res => res.json())
            .then(data => setCoffee(data));
    }, []);


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


        fetch(`http://localhost:3000/coffee/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
                if (data.deletedCount === 1) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Coffee has been deleted.",
                        icon: "success"
                    });

                    const newCoffees = coffee.filter(cf => cf._id !== id);
                    setCoffee(newCoffees);
                }
            });
        }
        })
      
    }
    

    




    return (
        <>
            <div className="py-10 text-center">
                <p>--- Sip & Savor ---</p>
                <h1 className="text-5xl font-semibold py-4 text-[#331A15] font-Rancho">Our Popular Products </h1>
                <Link to={'/add_coffee'}>
                    <button className="bg-[#E3B577] px-4 py-3 text-lg font-semibold my-4 font-Rancho rounded-lg">Add Coffee</button>
                </Link>
            </div>


            <div className='w-4/5 mx-auto'>
                <div className="grid grid-cols-2 gap-8 py-8">



                    {
                        coffee.map(cf => <Product coffee={cf} handleDelete={handleDelete} key={cf._id}></Product>)
                    }


                </div>
            </div>

        </>
    );
};


export default Products;