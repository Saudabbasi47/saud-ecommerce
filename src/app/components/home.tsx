
import ItemsData from "@/app/components/data";
import Image from "next/image";
import React from "react";
import Form from "./form";
import Rev from "./rev";
import Link from "next/link";

const Home = () => {
  const Newitems=ItemsData.slice(4)
  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="flex justify-center items-center">

        
        <section className="text-white flex mt-3  justify-center ">
          <div className="flex flex-col md:flex-row md:justify-center text-center w-screen justify-center">
            {/* Left Content */}
            <div className="flex flex-col justify-between py-9 px-3 text-wrap items-center md:w-[50%] gap-9 bg-[#271c5af4] h-auto">
              <h1 className="text-lg font-semibold">
                Discover Amazing Products and Services
              </h1>
              <button className="w-[200px] py-3 bg-[#ffffff39] hover:bg-[#ffffff58] duration-200">
                <Link href={''}>See Collection</Link>
              </button>
              <p className="font-light">
                Find the best deals, explore amazing catalogs, and stay updated
                with the latest trends all in one place.
              </p>
            </div>

            {/* Right Image */}
            <div className=" md:block md:w-auto max-md:hidden justify-center flex">
              <img
                src="/images/banners/chair.jpg"
                alt="Promotional Banner"
                className="md:h-full h-[400px] md:w-[400px] w-[80%] object-cover object-center"
              />
            </div>
          </div>
        </section>
</div>
        {/* Reviews */}
        <Rev />

        {/* New Arrivals */}
        <section className="overflow-hidden">
          <h1
            className="font-bold text-[34px] mt-10 ml-5 mb-10"
            id="newproduct"
          >
            New Arrivals
          </h1>
          <ul className="flex flex-wrap items-center justify-center mt-10 gap-6 overflow-hidden p-9 h-auto">
            {Newitems.map((product) => (
              <li
              id="product"
                key={product.id}
                className="hover:scale-105 overflow-hidden duration-300"
              >
                <a href={`/products/${product.id}`}>
                  <img
                    src={`/images/banners/${product.image}`}
                    alt={product.name}
                    className="h-[350px] object-cover w-[280px] object-center"
                  />
                  <h1 className="font-bold font-mono text-lg ml-3 mt-3">
                    {product.name}
                  </h1>
                </a>
                <p className="font-semibold font-serif ml-3">
                  $ {product.price}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center px-7 py-3 mb-20">
            <div className="md:w-[300px] text-center w-full border-white py-4 mt-10 bg-gray-100 hover:bg-gray-200 font-bold duration-200">
              <a href="/products">View Our Collection</a>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <Form />

        {/* Studio Section */}
        <section className="w-screen flex bg-gray-100">
          <div className="bg-white w-screen flex flex-col md:flex-row mt-20 justify-center items-center">
            <div className="flex flex-col gap-10 p-9 md:w-1/2 w-screen bg-white">
              <h1 className="font-semibold mb-5 text-lg">
                From the Studio in London TO Blah Blah
              </h1>
              <p className="font-light">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                in omnis voluptates
              </p>
              <button className="px-4 duration-300 py-3 w-full md:w-[150px] bg-gray-100 hover:bg-gray-300">
                Get In Touch
              </button>
            </div>
            <div className="md:w-1/2 w-screen flex justify-center items-center">
              <Image
                className="object-cover w-full h-full"
                height={500}
                width={500}
                alt="Banner"
                src="/images/banners/lucylamp.jpg"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
