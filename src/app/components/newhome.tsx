import React from "react";
import Rev from "./rev";
import ItemsData from "@/app/components/data";
import { CircleCheck } from "lucide-react";

const NewHome = () => {
  const Newitems = ItemsData.slice(4);

  return (
    <>
      <main>
        {/* Main Hero Section */}
        {/* For PC */}
        <section className="max-md:hidden">
          <div
            className=" h-[600px] w-screen flex justify-end items-center bg-center bg-cover"
            style={{ backgroundImage: "url(/images/banners/heroo.jpg)" }}
          >
            <div className="h-[400px] bg-white w-[600px] mr-10 p-10">
              <h1 className="text-2xl p-3 ">
                Luxury homeware for people who love timeless design quality
              </h1>
              <p className="p-3 font-thin">
                Shop the new Spring 2022 collection today
              </p>
              <button className="p-3 bg-gray-100 px-5 mt-20">
                View Collection
              </button>
            </div>
          </div>
        </section>

        {/* For mobile Users */}

        <section className="flex items-end flex-col md:hidden">
          <div className=" text-center h-[300px] w-screen">
            <h1 className="text-2xl p-3 ">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="p-3 font-thin">
              Shop the new Spring 2022 collection today
            </p>
            <button className="p-3 bg-gray-100 px-5 mt-10">
              View Collection
            </button>
          </div>

          <div
            className="bg-yellow-400 h-[440px]  w-screen bg-cover bg-center "
            style={{ backgroundImage: "url('/images/banners/heroo.jpg')" }}
          ></div>
        </section>

        <Rev />
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
                <h1 className="font-semibold  text-lg ml-3 mt-3">
                  {product.name}
                </h1>
              </a>
              <p className="ml-3">$ {product.price}</p>
            </li>
          ))}
        </ul>
        <section className="flex md:p-5 mt-5  max-md:flex-col justify-center items-center md:gap-4">
          <div className="h-[400px] w-screen md:w-[600px] max-md:text-center flex flex-col gap-5  bg-[#2a254b] p-5 text-white">
            <h1 className="text-3xl mt-5">It started with a small idea</h1>
            <p className="font-thin mt-10">
              A global brand with local beginnings, our story begain in a small
              studio in South London in early 2014
            </p>
            <button className="mt-10 bg-[#f9f9f925] px-5 py-3 md:w-[150px]">
              See Collection
            </button>
          </div>
          <div
            className="h-[400px] w-screen md:w-[600px] bg-cover bg-center "
            style={{ backgroundImage: "url('/images/banners/banner2.jpg')" }}
          ></div>
        </section>
        <section className="">
          <div
            className="h-[500px] w-screen bg-cover bg-center flex items-center md:justify-center py-10 overflow-hidden px-5 "
            style={{ backgroundImage: "url('/images/banners/jjj.jpg')" }}
          >
            <div className="text-white px-3 flex md:items-center justify-center flex-col  ">
              <h1 className="text-3xl mt-5 font-semibold">
                Get the benifit join the club
              </h1>
              <p className="mt-10">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
              <ul className="mt-10 flex max-md:flex-col gap-10 md:justify-center">
                <li className="flex gap-1">
                  <CircleCheck />
                  Get Exclusive Offers
                </li>
                <li className="flex gap-1">
                  <CircleCheck />
                  Free Events
                </li>
                <li className="flex gap-1">
                  <CircleCheck />
                  Great Discounts
                </li>
              </ul>
              <div className="md:w-[480px] w-[350px] overflow-hidden  h-[50px] bg-white mt-10 mb-10 ">
                <input className="h-full w-[75%]" type="text" />
                <button className="h-full w-[25%] px-3 bg-[#2a254b] overflow-hidden">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NewHome;
