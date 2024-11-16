
import logo from '../assets/more/logo1.png'
import backgroundImage from '../assets/more/15.jpg';
import { useContext } from 'react';
import { AuthContext } from './Authentication';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const {user,loading,logOut} = useContext(AuthContext);
    
    if(loading) return <span>------</span>

    const handleLogOut =()=>{

        logOut()
		.then(() => {
			alert('logOut Successfully');
		  }).catch((error) => {
			 console.log(error);
		  })

    }

    return (
        <div>
            <div>
                <div
                    className="flex justify-center items-center py-4 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <Link to={'/'}> <img width={'75px'} src={logo} alt="" /></Link>
                    <h1 className="text-4xl font-bold mx-4 text-white font-Rancho">Espresso Emporium({user?.displayName})</h1>
                    {
                        user?.email ?  <button onClick={handleLogOut}>LogOut</button> : <Link to={'/login'} className='text-white text-2xl font-bold'>Login</Link>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;