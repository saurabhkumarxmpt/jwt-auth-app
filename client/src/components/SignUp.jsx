import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const SignUp=()=>{
        const[data,setdata]=useState(null);


    return(
        <>
       <div className="min-h-screen flex">
         <div className="w-1/2 hidden md:block">
                <img
                     src="/images/signup.png" // 
                     alt="Signup"
                     className="w-full h-full object-cover"
                />
        </div>

  <div className="w-full md:w-1/2 flex items-center justify-center p-6">
    <form className="w-full max-w-md bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name<sup className='text-red-500 text-md'>*</sup></label>
        <input
          type="text"
          placeholder='Enter Name'
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Username<sup className='text-red-500 text-md'>*</sup></label>
        <input
          type="username"
          placeholder='Enter Username'
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email<sup className='text-red-500 text-md'>*</sup></label>
        <input
          type="email"
          placeholder='Enter Email'
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password<sup className='text-red-500 text-md'>*</sup></label>
        <input
          type="password"
          placeholder='Enter password'
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Sign Up
      </button>

      <p className="mt-4 text-center text-sm">
        Already have an account? <a className="text-blue-600 hover:underline" href="#">Log In</a>
      </p>
    </form>
  </div>
</div>

        </>
    )
}

export default SignUp;