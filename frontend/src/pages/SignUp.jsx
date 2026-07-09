import React from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';


const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

const handleChange = (e) => {
  console.log("Handle change called");
  
  const {name, value} = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault()
  
  try{
    console.log("I am here");
    
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/register`, formData)
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user));
    navigate('/dashboard')
  }
  catch (error) {
    console.log("Error creating account", error);
  }
}

  return (
    <div className='flex w-screen h-screen overflow-hidden font-sans bg-white'>
      
      {/* LEFT SIDE: Brand Hero Section */}
      <div className='relative flex flex-col items-center justify-center w-1/2 h-full bg-[#4F46E5] text-center p-16 select-none'>
        

        <h1 className='text-4xl text-[#DAD7FF] font-bold tracking-tight'>Master your capital.</h1>
        
        <p className='text-[#DAD7FF]/80 mt-4 text-sm max-w-md leading-relaxed'>
          Securely manage your assets, analyze market trends, and build your financial legacy with FinanceFlow's precision-engineered dashboard.
        </p>

        {/* Portfolio Visualization Card */}
        <div className="w-full max-w-sm bg-white/10 border border-white/20 rounded-2xl p-5 shadow-2xl text-white flex flex-col justify-between h-52 mt-12 backdrop-blur-sm">
          <div className="flex justify-between items-start">
            <div className="flex flex-col text-left">
              <p className="text-[#DAD7FF]/60 text-[10px] font-bold tracking-wider uppercase">Total Portfolio</p>
              <p className="text-xl font-bold mt-0.5">$482,921.40</p>
            </div>
            
            {/* Trend Indicator Badge */}
            <div className="bg-[#6CF8BB]/20 px-2.5 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3 text-[#6FFBBE]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-[#6FFBBE] text-[11px] font-bold font-mono">+12.4%</span>
            </div>
          </div>

          <div className="flex items-end justify-between h-20 gap-2 mt-4 px-1">
            <div className="w-full bg-[#DAD7FF]/30 h-[40%] rounded-sm"></div>
            <div className="w-full bg-[#DAD7FF]/50 h-[55%] rounded-sm"></div>
            <div className="w-full bg-[#DAD7FF]/30 h-[50%] rounded-sm"></div>
            <div className="w-full bg-[#DAD7FF]/60 h-[70%] rounded-sm"></div>
            <div className="w-full bg-[#DAD7FF]/20 h-[80%] rounded-sm"></div>
            <div className="w-full bg-[#DAD7FF] h-[90%] rounded-sm"></div>
          </div>
        </div>


      </div>


      {/* RIGHT SIDE: Registration Form Section */}
      <div className='flex flex-col justify-center items-center w-1/2 h-full bg-[#FAFAFA] px-24 overflow-y-auto py-12'>
        <div className='w-full max-w-md flex flex-col text-left'>
          
          <h2 className='text-3xl font-bold text-slate-900 tracking-tight'>Create your account</h2>
          <p className='text-slate-500 text-sm mt-1'>Get started with your precision financial dashboard today.</p>

          <form onSubmit={handleSubmit} className='mt-6 flex flex-col gap-4' >
            
            {/* Full Name Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-slate-600'>Full Name</label>
              <div className='relative flex items-center'>
                <svg className="w-5 h-5 absolute left-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input 
                  type='text' 
                  placeholder='John Doe' 
                  name='username'
                  value={formData.username}
                  onChange={handleChange}
                  className='w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all placeholder:text-slate-300 text-slate-800' 
                />
              </div>
            </div>

            {/* Email Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-slate-600'>Email Address</label>
              <div className='relative flex items-center'>
                <svg className="w-5 h-5 absolute left-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input 
                  type='email' 
                  placeholder='name@company.com' 
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all placeholder:text-slate-300 text-slate-800' 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-xs font-semibold text-slate-600'>Password</label>
              <div className='relative flex items-center'>
                <svg className="w-5 h-5 absolute left-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type='password' 
                  placeholder='Minimum 8 characters' 
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full pl-11 pr-11 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all placeholder:text-slate-300 text-slate-800' 
                />
                <svg className="w-5 h-5 absolute right-4 text-slate-400 cursor-pointer hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                </svg>
              </div>
            </div>

            {/* Terms and Conditions Checkbox */}
            <div className='flex items-start gap-2 mt-1'>
              <input 
                type='checkbox' 
                id='terms' 
                className='w-4 h-4 rounded border-slate-300 text-[#4F46E5] focus:ring-[#4F46E5] accent-[#4F46E5] mt-0.5' 
              />
              <label htmlFor='terms' className='text-xs text-slate-500 font-medium select-none cursor-pointer leading-normal'>
                I agree to the <a href="#terms" className="text-[#4F46E5] font-bold hover:underline">Terms of Service</a> and <a href="#privacy" className="text-[#4F46E5] font-bold hover:underline">Privacy Policy</a>
              </label>
            </div>

            {/* Primary Sign Up Button */}
            <button type='submit' className='w-full py-3 bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/10 mt-2'>
              Create Account
            </button>
          </form>

          {/* Divider Segment */}
          <div className='relative flex items-center justify-center my-5'>
            <div className='w-full border-t border-slate-200/80'></div>
            <span className='absolute bg-[#FAFAFA] px-3 text-xs font-medium text-slate-400 uppercase tracking-wider scale-90'>
              Or sign up with
            </span>
          </div>

          {/* OAuth Social Buttons Grid */}
          <div className='grid grid-cols-1 gap-4'>
            <button className='flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all'>
             
              Google
            </button>
          </div>

          {/* Login Prompt Link */}
          <p className='text-center text-sm text-slate-500 mt-6'>
            Already have an account?{' '}
                <Link to={'/login'} className='font-bold text-[#4F46E5] hover:underline'>
                     Sign in
                
                </Link>
           
          </p>

        </div>
      </div>

    </div>
  );
};

export default SignUpPage;