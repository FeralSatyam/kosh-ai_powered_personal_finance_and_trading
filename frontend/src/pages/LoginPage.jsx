import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { Wallet01Icon } from '@hugeicons/core-free-icons';

const LoginPage = () => {
  return (
    <>
        {/* Items on the left hand side */}
      <div className='bg-[#4F46E5] w-1/2 h-screen flex flex-col justify-content items-center text-center p-15'>
        <HugeiconsIcon icon={Wallet01Icon} className='text-white' size={'45'}/>
        <h1 className='text-4xl text-[#DAD7FF] font-bold pt-5'>Master your capital.</h1>
        <p className='text-[#DAD7FF] pt-6'>Securely manage your assets, analyze market <br />
            trends, and build your financial legacy with <br />
             FinanceFlow's precision-engineered dashboard.</p>


        {/* Card with total portfolio */}
        <div className='w-90 h-50 bg-[#DAD7FF] rounded flex pt-10'>

        </div>
      </div>

    {/* Items on the right hand side */}
      <div className='flex justify-content w-1/2 h-screen items-center'>
        <h1 className='2xl'>Hello World</h1>
      </div>
    </>
  )
}

export default LoginPage
