import ItemsData from "../components/data"
const Page = () => {
  return (
<>
<div id='cca' className=' h-[100px] w-screen '>
<h1 className='text-4xl font-bold text-white mt-14  ml-5 overflow-hidden'>All Products</h1>
</div>

<div>
    <div className="h-[60px] w-screen bg-slate-100">

    </div>
<ul className="flex flex-wrap gap-20 mt-10 mb-10 justify-center items-center content-center">
{ItemsData.map((product)=>(
  <li
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


</div>


</>
  )
}

export default Page
