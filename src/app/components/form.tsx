import { CircleCheck } from 'lucide-react'
import React from 'react'
const Form = () => {
  return (
    <>
    
    
    {/* <section className="bg-gray-200 flex justify-center items-center  h-[300px]">
<div className="bg-gray-100 md:h-[250px] h-full px-9 flex justify-center items-center flex-col gap-6 py-6">
  <div className="text-center">
    <h1 className="text-lg font-bold">
      Join the Club And Get The Benefit
    </h1>
    <p className="font-light">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
      sit in rerum necessitatibus
    </p>
  </div>
  <div>
    <input
      type="text"
      name="text"
      placeholder="your@email.com"
      className="bg-white py-3 w-[200px] md:w-[299px] placeholder:font-light pl-3"
    />
    <button className="bg-indigo-900 px-5 font-light py-3 hover:bg-indigo-600 duration-200 text-white">
      Sign up
    </button>
  </div>
</div>
</section> */}
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
              <div className="md:w-[480px] w-[320px] overflow-hidden  h-[50px] bg-white mt-10 mb-10 ">
                <input className="h-full w-[75%]" type="text" />
                <button className="h-full w-[25%] px-3 bg-[#2a254b] overflow-hidden">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>

</>
  )
}

export default Form
