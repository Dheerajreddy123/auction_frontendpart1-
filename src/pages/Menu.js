import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import AllProduct from '../components/AllProduct'
import { addCartItem } from '../redux/productSlice'

const Menu = () => {
  const {filterby}=useParams()
  const dispatch=useDispatch()
  const productData=useSelector(state=>state.product.productList)

  const productDisplay=productData.filter(e1=>e1._id===filterby)[0]
  console.log(productDisplay)

  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem(productData))
  }
  
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-white'>
        <div className='max-w-sm  overflow-hidden w-full p-5'>
          <img src={productDisplay.image} className='hover:scale-105 transition-all h-full'/>
        </div>
        <div className=' flex flex-col gap-1'>
        <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
          {productDisplay.name}
        </h3>
        <p className=" text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
        <p className=" font-bold text-red-500 md-text-2xl">
          ₹{productDisplay.price}
        </p>
        <div className='flex gap-3'>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-500 hover:text-white border-2 border-gray-900 focus:outline-none my-2 min-w-[100px]">Buy</button>
        <button onClick={handleAddCartProduct} className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-500 hover:text-white border-2 border-gray-900 focus:outline-none my-2 min-w-[100px]">Add to cart</button>
        </div>

        <div >
          <p className='text-slate-600 font-medium'>Description</p>
          <p>{productDisplay.description }</p>
        </div>
        </div>
      </div>
      <AllProduct heading={"Related product"}/>
    </div>
  )
}

export default Menu