import React from 'react'

const LoginPage = () => {
  return (
    <div className='flex w-screen h-screen overflow-hidden font-sans bg-white'>
      
      {/* LEFT SIDE: Brand Hero Section */}
      <div className='relative flex flex-col items-center justify-center w-1/2 h-full bg-[#4F46E5] text-center p-16 select-none'>
        
        {/* Wallet Icon Box Wrapper */}
        

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


      {/* RIGHT SIDE: Authentication Form Section */}
      <div className='flex flex-col justify-center items-center w-1/2 h-full bg-[#FAFAFA] px-24'>
        <div className='w-full max-w-md flex flex-col text-left'>
          
          <h2 className='text-3xl font-bold text-slate-900 tracking-tight'>Welcome back</h2>
          <p className='text-slate-500 text-sm mt-1'>Please enter your details to sign in to your account.</p>

          <form className='mt-8 flex flex-col gap-5' onSubmit={(e) => e.preventDefault()}>
            
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
                  className='w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all placeholder:text-slate-300 text-slate-800' 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='flex flex-col gap-1.5'>
              <div className='flex justify-between items-center'>
                <label className='text-xs font-semibold text-slate-600'>Password</label>
                <a href='#forgot' className='text-xs font-bold text-[#4F46E5] hover:underline'>Forgot password?</a>
              </div>
              <div className='relative flex items-center'>
                <svg className="w-5 h-5 absolute left-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input 
                  type='password' 
                  placeholder='••••••••' 
                  className='w-full pl-11 pr-11 py-3 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/10 transition-all placeholder:text-slate-300 text-slate-800' 
                />
                <svg className="w-5 h-5 absolute right-4 text-slate-400 cursor-pointer hover:text-slate-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className='flex items-center gap-2 mt-1'>
              <input 
                type='checkbox' 
                id='remember' 
                className='w-4 h-4 rounded border-slate-300 text-[#4F46E5] focus:ring-[#4F46E5] accent-[#4F46E5]' 
              />
              <label htmlFor='remember' className='text-xs text-slate-500 font-medium select-none cursor-pointer'>
                Remember me for 30 days
              </label>
            </div>

            {/* Primary Sign In Button */}
            <button className='w-full py-3 bg-[#4F46E5] hover:bg-[#4338CA] active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-indigo-600/10 mt-2'>
              Sign In
            </button>
          </form>

          {/* Divider Segment */}
          <div className='relative flex items-center justify-center my-6'>
            <div className='w-full border-t border-slate-200/80'></div>
            <span className='absolute bg-[#FAFAFA] px-3 text-xs font-medium text-slate-400 uppercase tracking-wider scale-90'>
              Or continue with
            </span>
          </div>

          {/* OAuth Social Buttons Grid */}
          <div className='grid grid-cols-1 gap-4'>
            <button className='flex items-center justify-center gap-2 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all'>
              
              Google
            </button>
          </div>

          {/* Registration Prompt Link */}
          <p className='text-center text-sm text-slate-500 mt-8'>
            Don't have an account?{' '}
            <a href='#signup' className='font-bold text-[#4F46E5] hover:underline'>Create an account</a>
          </p>

        </div>
      </div>

    </div>
  )
}

export default LoginPage