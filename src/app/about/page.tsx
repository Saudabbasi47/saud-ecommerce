import React from "react";
import Link from "next/link";
import Image from "next/image";
import Rev from "../components/rev";
import Form from "../components/form";
const Page = () => {
  return (
    <>
      <div className="flex mt-10 gap-4 items-center justify-around max-md:flex-col max-md:text-center max-md:gap-5 mb-5 ">
        <h1 className="text-2xl font-semibold font-mono">
          A brand built on love of craftsman <br /> Ship and Creativty blah blah
          blah
        </h1>
        <button className="px-5 h-12 bg-slate-200 ">
          <Link href={"/products"} className="">
            See Collection
          </Link>
        </button>
      </div>
      
      
      
      <section className="w-screen max-md:flex-col max-md:px-16 items-center flex px-5 mt-10 gap-2 mb-10">
      
      
        <div className="flex gap-20 justify-around flex-col w-1/2 max-md:w-full max-md:items-center max-md:text-center h-[400px]  px-10  bg-[#271c5af4] text-white">
          <div>

          <h1 className="text-2xl font-bold">
            It started with a small idea
          </h1>
          <p className="font-light mt-3">
            a global brand with local beginning in a small town in karachi.
          </p>
          </div>
      
      <button className="px-5 h-12 bg-[#ffffff33] w-[200px] "><Link href={"/products"}>See Collection</Link></button>
      
        </div>
      
      
      
      
        <div className="w-full md:w-1/2 h-[400px] aspect-square ">
          <Image width={700} height={700} src={"/images/banners/desf.jpg"} alt="2" className="h-full w-full object-cover  aspect-square " />
        </div>
      </section>



      <section className="w-screen bg-gray-100 flex max-md:flex-col ">
{/* Imag Section */}
<div  className="cont md:w-1/2 md:h-[470px] h-[440px] bg-cover bg-center w-full ">

<Image width={600} height={600} src={'/images/banners/sad.jpg'} alt="2" className="h-full w-full object-cover md:aspect-square" ></Image>


</div>




{/* Content Section */}
        <div className="md:w-1/2 px-6  py-5 max-md:text-center flex flex-col gap-4 ">
          <h1 className="font-semibold text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem beatae, inventore fuga 
          </h1>
<p className="mt-3 font-thin text-gray-400">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quasi doloribus nulla quaerat ab quis unde, minus doloremque
</p>
<p className="mt-3 font-thin text-gray-400">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quos.
</p>
<div>
  <button className=" mt-10 max-md:w-[300px]  px-6 py-3 bg-white hover:shadow-lg shadow-black backdrop-brightness-200 duration-100">
    <Link href="#contact
    ">Get In Touch</Link>
  </button>
</div>



        </div>
      </section>

      <Rev/>
      <Form/>
    </>
  );
};

export default Page;
