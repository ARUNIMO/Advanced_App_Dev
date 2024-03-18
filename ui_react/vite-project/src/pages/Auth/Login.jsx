import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col p-4 rounded-md text-black bg-gradient-to-b from-orange-200 to-white shadow-md">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span className="text-[#f35415]">Our App</span></div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
      <form className="flex flex-col gap-3">
        <div className="block relative"> 
          <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
          <input type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0" />
        </div>
        <div className="block relative"> 
          <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
          <input type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
        </div>
        <div>
          <a href="#" className="text-sm text-[#f35415]">Forgot your password?</a>
        </div>
        <button type="submit" className="bg-[#f35415] w-max mx-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
      </form>
      <div className="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <Link to="/register" className="text-sm text-[#f35415]">Sign up for free!</Link></div>
    </div>
  );
}

export default Login;
