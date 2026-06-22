import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className='min-h-screen bg-[#FAFAFA] font-sans antialiased text-slate-800 selection:bg-[#4F46E5]/10 selection:text-[#4F46E5]'>
      
      {/* 1. NAVIGATION BAR */}
      <nav className='w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-8 lg:px-16 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900'>
          Kosh
        </div>
        
        <div className='hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600'>
          <a href="#features" className='hover:text-[#4F46E5] transition-colors'>Features</a>
          <a href="#analytics" className='hover:text-[#4F46E5] transition-colors'>Analytics</a>
          <a href="#pricing" className='hover:text-[#4F46E5] transition-colors'>Pricing</a>
        </div>

        <div className='flex items-center gap-4 text-sm font-semibold'>
          <Link to={'/login'} className='text-slate-600 hover:text-slate-900 transition-colors py-2 px-3'>
          Sign In
          </Link>
          
          <Link to={'/signup'} className='bg-[#4F46E5] hover:bg-[#4338CA] text-white px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/10 transition-all active:scale-[0.98]'>
          Get Started</Link>
         
            
          
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <header className='relative overflow-hidden bg-gradient-to-b from-white to-[#FAFAFA] pt-16 pb-24 px-8 lg:px-16 grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto'>
        
        {/* Left Side: Pitch and Call to Action */}
        <div className='flex flex-col text-left max-w-xl'>
        
          <h1 className='text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]'>
            Master your capital with <span className='text-[#4F46E5]'>precision.</span>
          </h1>
          <p className='text-slate-500 mt-6 text-base md:text-lg leading-relaxed'>
            Securely manage your assets, analyze volatile market trends, and build your financial legacy with FinanceFlow's modern, institutional-grade portfolio engine.
          </p>
          <div className='flex flex-col sm:flex-row items-center gap-4 mt-8'>
            <Link to={'/signup'} className='w-full sm:w-auto text-center py-3.5 px-6 bg-[#4F46E5] hover:bg-[#4338CA] text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/10 active:scale-[0.99]'>
            Start Free Account
            </Link>
             
            <a href="#demo" className='w-full sm:w-auto text-center py-3.5 px-6 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2'>
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Product Demo
            </a>
          </div>
        </div>

        {/* Right Side: Showcase Element */}
        <div className='relative flex items-center justify-center lg:justify-end w-full'>
          <div className='absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-teal-500/10 rounded-3xl blur-3xl opacity-70 -z-10'></div>
          
          {/* Main Visual Display Wrapper */}
          <div className='w-full max-w-md bg-[#4F46E5] rounded-3xl p-8 shadow-2xl text-center relative text-white select-none overflow-hidden'>
            <div className='absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none'></div>
            
            
           

            <h3 className='text-2xl font-bold tracking-tight'>Live Portfolio Dashboard</h3>
            <p className='text-[#DAD7FF]/70 text-xs mt-2 max-w-xs mx-auto'>Real-time visualization engine connected to global institutional nodes.</p>

            {/* Micro Dashboard Card */}
            <div className="w-full bg-white/10 border border-white/20 rounded-2xl p-5 shadow-xl text-white flex flex-col justify-between h-56 mt-8 backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <div className="flex flex-col text-left">
                  <p className="text-[#DAD7FF]/60 text-[10px] font-bold tracking-wider uppercase">Total Portfolio</p>
                  <p className="text-xl font-bold mt-0.5">$482,921.40</p>
                </div>
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
        </div>
      </header>

      {/* 3. SOCIAL TRUST METRICS BAR */}
      <section className='border-y border-slate-200/60 bg-white py-8 px-8 flex flex-wrap justify-center items-center gap-x-16 gap-y-6 text-slate-400 font-semibold text-sm tracking-widest uppercase'>
        <div>• TRUSTED BY 40,000+ MANAGERS</div>
        <div>• $2.4B ASSETS TRACKED</div>
        <div>• ISO-27001 COMPLIANT</div>
      </section>

      {/* 4. VALUE PROPOSITION FEATURES SECTION */}
      <section id="features" className='py-24 px-8 lg:px-16 max-w-7xl mx-auto text-center'>
        <div className='max-w-xl mx-auto'>
          <h2 className='text-xs font-bold text-[#4F46E5] tracking-widest uppercase'>Engineered for Scaling</h2>
          <p className='text-3xl font-bold tracking-tight text-slate-900 mt-2 sm:text-4xl'>Everything your legacy requires.</p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 text-left'>
          
          {/* Card Item 1 */}
          <div className='bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4'>
            <div className='w-10 h-10 bg-[#4F46E5]/5 text-[#4F46E5] flex items-center justify-center rounded-xl font-bold'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className='font-bold text-slate-900 text-lg'>Military-Grade Guardrails</h3>
            <p className='text-sm text-slate-500 leading-relaxed'>End-to-end zero-knowledge asymmetric data encryption protocols running seamlessly across decentralized server networks.</p>
          </div>

          {/* Card Item 2 */}
          <div className='bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4'>
            <div className='w-10 h-10 bg-[#4F46E5]/5 text-[#4F46E5] flex items-center justify-center rounded-xl font-bold'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className='font-bold text-slate-900 text-lg'>Predictive Market Analysis</h3>
            <p className='text-sm text-slate-500 leading-relaxed'>Utilize machine learning trend vectors to identify changing market dynamics before fluctuations trigger stop-losses.</p>
          </div>

          {/* Card Item 3 */}
          <div className='bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-4'>
            <div className='w-10 h-10 bg-[#4F46E5]/5 text-[#4F46E5] flex items-center justify-center rounded-xl font-bold'>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className='font-bold text-slate-900 text-lg'>Asynchronous Sync Engines</h3>
            <p className='text-sm text-slate-500 leading-relaxed'>Instant cross-border wallet processing engine synchronizes every linked account node at low execution latency.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;