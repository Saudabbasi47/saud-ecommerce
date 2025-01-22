import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <main className='bg-[#2A254B]'>

    <main className='flex justify-ceter items-center flex-col md:flex-row w-screen py-12 justify-around bg-[#2A254B] text-white'>

<section className='flex justify-center items-center  gap-16' id='contact'>
<div className='text-center'>
    <h1 className='font-semibold text-[18px] mb-2'>Menu</h1>
    <ul className='font-light text-center'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About us</Link></li>
        <li><Link href="/products">Products Listing</Link></li>
    </ul>
    <h1 className='font-semibold text-[18px] mt-6 mb-2'>
        Featured
    </h1>
    <ul className='font-light text-center'>
        <li><Link href="#product">New Products</Link></li>
        <li><Link href="/products/cart/id">Your Cart</Link></li>
    </ul>
</div>


</section>
<section className='flex items-center'>



<div>
    <h1 className='text-lg font-bold mb-5'>Contact Us</h1>
    <input type="text" placeholder='your@email.com'  className='bg-[#ffffff4e] py-3 placeholder:font-light text-center placeholder:text-white px-3 w w-[350px]'/>
    <button className='bg-white hover:bg-gray-100 duration-300 text-black px-3 py-3 font-light text-center'>Sign up</button>
</div>



</section>






    </main>
    <div className='w-screen flex justify-center'>

    <div className='h-[2px] w-[9%] bg-gray-300 rounded-full'></div>
    </div>
    <div>
        <h1 className='text-center text-[17px] font-semibold text-white py-4'>
            © 2024 My E-Commerce. All rights reserved.
        </h1>
    </div>
    </main>
    
    
    </>
  )
}

export default Footer
