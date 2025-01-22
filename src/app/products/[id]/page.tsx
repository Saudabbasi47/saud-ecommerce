import { Truck, Package, Shield } from "lucide-react";
import React from "react";
import ItemsData from "@/app/components/data";
import Image from "next/image";
import Rev from "@/app/components/rev";
import Link from "next/link";
const Page = ({ params }: any) => {
  const id = params.id;
  // getting item info
  const item = ItemsData.find((item) => item.id === id);
const Newitems=ItemsData.slice(4);
  return (
    <>
      <section className="w-screen md:h-[700px] mt-10 mb-10 flex max-md:flex-col items-center">
        <div className="md:w-1/2 h-[800px] w-full bg-amber-300 md:h-full">
          <Image
            height={600}
            width={500}
            src={`/images/banners/${item?.image}`}
            className="h-full w-full object-cover "
            alt={`Image Not Loaded`}
          />
        </div>

        <div className="w-1/2 pl-8 py-5 mt-16">
          <h1 className="font-bold text-6xl mb-6 overflow-hidden ">{item?.name}</h1>
          <h3 className="font-semibold text-2xl font-mono mb-5">$ {item?.price}</h3>
          <h4 className="font-semibold text-xl mb-4">Description</h4>
          <p className="font-thin">
            {item?.description}
          </p>
          <ul className="mt-10  flex flex-col gap-2  ">
            <li className="flex gap-4 ">
              <Truck /> <p className="font-mono">Safe Shipping</p>
            </li>
            <li className="flex gap-4">
              <Package /> <p className="font-mono">Free Return</p>
            </li>
            <li className="flex gap-4">
              <Shield />
              <p className="font-mono">Secure Payments</p>
            </li>
            <li></li>
          </ul>

          <div className="flex justify-around mt-16 items-center flex-row-reverse">
            <button className="px-5 py-3 bg-[#271c5af4] hover:bg-indigo-800 font-light duration-200 text-white">
             <Link href={`/products/cart/${item?.id}`}>
              Add to cart
             </Link>
            </button>

            <div className="flex hover:bg-gray-300 duration-200 ">
              <span className="flex gap-10 text-lg font-semibold px-4 py-2.5 bg-gray-100 text-black hover:bg-gray-300 duration-300">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className=" mt-20">
        <h1 className="text-3xl font-bold overflow-hidden">
          You Might Also Like
        </h1>
        <ul className="flex flex-wrap gap-20 mt-10 mb-10 justify-center items-center content-center">

      {Newitems.map((product) => (
        <li
        key={product.id}
        className="mb-20 hover:scale-105 overflow-hidden duration-300"
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
            <Rev/>
      </div>
    </>
  );
};

export default Page;
