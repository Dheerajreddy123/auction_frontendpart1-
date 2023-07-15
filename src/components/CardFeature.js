import React from 'react'
import { Link } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice'
import { useDispatch } from 'react-redux'


const CardFeature = ({image,name,category,price,loading,id}) => {
  const dispatch=useDispatch()
  
  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      category:category,
      image:image
    }))
  }
  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white shadow-lg transition duration-300 ease-in-out hover:scale-110 drop-shadow-lg py-5 px-4 flex flex-col rounded'>
    {
        image ? <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
        <div className='h-28 flex flex-col justify-center items-center'>
            <img src={image} className='h-full'/>
        </div>
        <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
          {name}
        </h3>
        <p className=" text-slate-500 font-medium">{category}</p>
        <p className=" font-bold text-red-500 mt-2">
          ₹{price}
        </p>
        </Link>
        <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-blue-500 hover:text-white border-2 border-gray-900 focus:outline-none my-2 w-full"
        onClick={handleAddCartProduct}>Add
            to cart</button>
            
        </>
        :
        <div className='min-h-[150px] flex justify-center items-center'>
        <p>{loading}</p>
        </div>
    }
       
    </div>
    
    
  )
}

export default CardFeature