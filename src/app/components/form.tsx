import React from 'react'

const Form = () => {
  return (
    <>
    
    
    <section className="bg-gray-200 flex justify-center items-center  h-[300px]">
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
</section></>
  )
}

export default Form
