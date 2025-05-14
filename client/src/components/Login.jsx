import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login=()=>{

        const[user,setuser]=useState({
            username:'',
            password:''
        });

        const navigate=useNavigate();

        const handleSubmit=async(e)=>{
                e.preventDefault();
                try{
                    const res=await axios.post('http://localhost:3000/auth/login',user);
                    alert("login succesful");
                    localStorage.setItem('token',res.data.token);
                    navigate('/profile');
                }catch(err){
                    alert('login faild');
                    console.log(user);
                    console.log(err.message);
                }
        }

    return(
        <>
         <div className="flex min-h-screen">
      <div className="w-1/2 hidden md:block">
        <img
          src="/images/login.jpg"
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login to your account</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Username<sup className='text-red-500 text-md'>*</sup></label>
              <input
                type="text"
                id="username"
                onChange={(e)=>setuser({...user,username:e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your Username"
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium">Password<sup className='text-red-500 text-md'>*</sup></label>
              <input
                type="password"
                id="password"
                onChange={(e)=>setuser({...user,password:e.target.value})}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="text-right">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>

          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
        </>
    )
}
export default Login;