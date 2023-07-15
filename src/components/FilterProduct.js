import React from 'react'
import {MdFoodBank} from "react-icons/md" 


const FilterProduct = ({category,onClick}) => {
  return (
   <div onClick={onClick}>
     <div className=' text-3xl p-5 bg-blue-200 rounded-full cursor-pointer'>
    <MdFoodBank/>
    </div>
    <p className='text-center font-medium my-1 capitalize'>{category}</p>
   </div>
  )
}

export default FilterProduct