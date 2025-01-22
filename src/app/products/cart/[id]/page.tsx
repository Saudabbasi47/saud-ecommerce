import Image from 'next/image'
import React from 'react'
import ItemsData from '../../../components/data'
const Page = ({params}:any) => {

    const id=params.id;
    // const id="2"
    // getting item info
    const items=ItemsData.filter((item)=>item.id===id);


  return (
    <>







{items.map((item)=>{
    return(<>
    
<h1 key={item.id} className='text-5xl font-mono mb-5 ml-10 font-bold overflow-hidden'>Your shopping cart</h1>
    <section className=''>
<div className='flex  justify-between px-20 mt-5 max-md:hidden'>
<p className='font-mono'>Products</p>
<p className='ml-[150px] font-mono'>Quantity</p>
<p className='font-mono'>Total</p>
</div>
<div className='px-[67px]'>
    <div className='h-[2px] bg-gray-200 mt-4 mb-4 '></div>
</div>
    
{/* product listing */}
<div className=' w-screen px-12 mt-5 mb-5 flex max-md:flex-col max-md:items-center justify-between'>

{/* product image and details */}
<div className='  md:h-[150px] md:w-[300px] overflow-hidden w-screen h-[300px] '>

<div className=' flex'>
<div className='md:h-[150px] md:w-[200px] h-[300px] w-1/2 bg-cover bg-center ' style={{backgroundImage:`url(/images/banners/${item.image})`}} id='cover'>
{/* <Image className=' h-[150px] w-[200px] object-cover aspect-square  ' src={'/images/banners/bottlevase.jpg'} width={100} height={100} alt='image not loaded'/> */}

</div>

<div className='px-3 py-2 flex flex-col gap-10 -mr-5 max-md:justify-center overflow-hidden'>
<h1 className='font-bold text-5xl font-mono overflow-hidden'>
    {item.name}
</h1>

<p className=' font-thin'>
{item.description}
</p>

<p className='font-mono font-semibold'>
    $ {item.price}
</p>
</div>


</div>



</div>

{/* product quantity */}
<div className='max-md:ml-20 max-md:-mt-10 mb-20 md:h-[150px] w-[100px] flex items-center justify-center'>
<div className='flex justify-center items-center '>
    <span className='flex gap-8 font-bold bg-gray-100 py-2 text-xl'>
        <div className=' cursor-pointer  select-none'>-</div>
        <div>1</div>
        <div className='cursor-pointer select-none'>+</div>
    </span>
</div>

</div>

{/* product total */}
<div className='bg-blue-600 md:h-[150px] flex justify-center items-center w-[100px] max-md:hidden md:mr-6'>

<p className='font-bold text-xl font-mono'>

    $ {item.price}
</p>


</div>



</div>

<div className=' w-screen flex justify-center'>
    <div className='h-[2px] bg-gray-300 w-[90%] mb-10 '></div>
</div>

    </section>
    
    
    
    <section className='flex mb-10 justify-end text-right mr-6 '>
<div className=''>
<h1 className='font-semibold text-xl  mb-3 text-[#351f8da1]'>Subtotal $ {item.price} </h1>
<h1 className='mb-3 text-lg font-semibold text-[#351f8da1]'>Taxes and Shipping are calculated at Subtotal</h1>
<button className='px-4 py-3 bg-[#2d115ad7] hover:bg-[#4d21ff] duration-200 text-white font-light'>Check Out</button>

</div>


    </section>
    
    </>)
})}










    
    </>
  )
}

export default Page
