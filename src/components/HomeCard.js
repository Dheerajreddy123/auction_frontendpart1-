// import React from 'react'

// const HomeCard = ({name,image,category,price}) => {
//   return (
//     <div className='bg-white shadow-md p-2 rounded'>
//         <div className='w-40 min-h-[150px]'>
//         <img src={image} className='h-full w-full'/>
//         </div>
//         <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
//         <p className='text-center text-slate-500 font-medium'>{category}</p>
//         <p className='text-center font-bold'><span className='text-red-500'>₹</span>{price}</p>
//     </div>
//   )
// }

// export default HomeCard


import React from 'react';
import { Link } from 'react-router-dom'


const HomeCard = ({ name, image, category, price,loading,id }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg flex flex-col items-center min-w-[290px]">
      {name ? (
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behavior:"smooth"})}>
        <div className="w-48 h-48 relative overflow-hidden">
        <img
          src={image}
          className="object-cover h-full w-full transition-transform duration-300 transform hover:scale-110"
          alt={name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button className="text-white text-lg font-semibold">
            View Details
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-slate-600 text-center capitalize text-lg">
          {name}
        </h3>
        <p className="text-center text-slate-500 font-medium">{category}</p>
        <p className="text-center font-bold text-red-500 mt-2">
          ₹{price}
        </p>
        <button className="bg-blue-500 text-white rounded-lg py-2 px-4 mt-4">
          Add to Cart
        </button>
      </div>
      </Link>
        </>
      )
      :
      <div className='flex justify-center items-center h-full'>
      <p>{loading}</p>
      </div>
      }
    </div>
  );
};

export default HomeCard;


