import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Authentication";


const Login = () => {

    const {handleLogin} = useContext(AuthContext);
    
    const handle_login = (e)=>{
          e.preventDefault();

          const email = e.target.email.value;
          const password = e.target.password.value;
          const  checkbox = e.target.checkbox.checked;
          
          if(checkbox === false) {
             return alert('allow terms and condition');
          }

          handleLogin(email,password)
          .then((userCredential) => {
        
            const user = userCredential.user;
           
            
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
          

           
    }



    return (
        <div>
            <div className="flex items-center justify-center w-full lg:p-12">
                <div className="flex items-center xl:p-10">
                    <form onSubmit={handle_login} className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl">
                        <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                        <p className="mb-4 text-grey-700">Enter your email and password</p>
                        <a className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                            <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                            Sign in with Google
                        </a>
                        <div className="flex items-center mb-3">
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                            <p className="mx-4 text-grey-600">or</p>
                            <hr className="h-0 border-b border-solid border-grey-500 grow" />
                        </div>
                        <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                        <input id="email" name="email" type="email" placeholder="mail@loopple.com" className="flex items-center border w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                        <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                        <input id="password" name="password" type="password" placeholder="Enter a password" className="flex border items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl" />
                        <div className="flex flex-row justify-between mb-8">
                            <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                                <input type="checkbox" name="checkbox" />
                                 
                                <span className="ml-3 text-sm font-normal text-grey-900">Terms and Condition</span>
                            </label>
                            <p  className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</p>
                        </div>
                        <button type="submit" className="w-full px-6 py-5 bg-[#D2B48C] mb-5 text-sm font-bold leading-none text-[#331A15] transition duration-300 md:w-96 rounded-2xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500">Sign In</button>
                        <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <Link to={'/register'} className="font-bold text-grey-700">Create an Account</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;