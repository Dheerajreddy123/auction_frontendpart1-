import React, { useEffect, useRef, useState } from 'react'
import HomeCard from '../components/HomeCard'
import { useSelector } from "react-redux"
import CardFeature from '../components/CardFeature'
import {FcPrevious,FcNext} from "react-icons/fc"
import FilterProduct from '../components/FilterProduct';
import AllProduct from '../components/AllProduct'

const Home = () => {
  const productData= useSelector((state)=>state.product.productList)
  const homeProductCartList=productData.slice(0,3)
  const homeProductCartListPizza= productData.filter(e1=>e1.category==="pizza",[])
  console.log(homeProductCartListPizza)

  const loadingArray=new Array(5).fill(null)
  const loadingArrayFeature=new Array(10).fill(null)


  const slideProductRef=useRef()
  const nextProduct =()=>{
    slideProductRef.current.scrollLeft += 200;
  }

  const PrevProduct =()=>{
    slideProductRef.current.scrollLeft -= 200;
  }






  
  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2'>
        <div className='flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full'>
          <p className='text-sm font-medium text-slate-900'>Bike Delivery</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQjC1nrDYMCnBRqGqKhlOk9kd2c78JGviyrlse9b2g-PSgFslq_ttja-xgh2XiTAXJKHg&usqp=CAU" alt='image here' className='h-7'/>
        </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Online Action and Retail <span className='text-red-600'>Store</span> </h2>
          <p className='py-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 p-4 justify-center'>
        {
          homeProductCartList[0] ? homeProductCartList.map(e1=>{
            return(
              <HomeCard
                key={e1._id}
                id={e1._id}
                image={e1.image}
                name={e1.name}
                price={e1.price}
                category={e1.category}
              />
            )
          })
          :
          loadingArray.map((e1,index)=>{
            return(
              <HomeCard
                key={index+"loading"}
                loading={"loading..."}
              />
            )
          })
        }
        </div>
      </div>


      <div name='contact' className='w-full  bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/961987fb-027a-423e-b53a-4786fa2fb046" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Auction Biding Form</p>
            </div>
            <input className='bg-[#ccd6f6] p-2 mb-3' type="text" placeholder='Name' name='name' />
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Product Name' name='Product Name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <input className='bg-[#ccd6f6] p-2' name="Amount" type='number' placeholder='Enter Amount you want to Bid should be greater than base price'></input>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Bid</button>
        </form>
    </div>



















      <div className=''>
      {/* <h2>Fresh vegetable</h2> */}
      <div className='flex w-full items-center'>
      <h2 class="text-5xl font-extrabold dark:text-white mb-5">
      Items for Auction
      </h2>
      <div className='ml-auto flex gap-4'>
        <button onClick={PrevProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded h-1/2'><FcPrevious/></button>
        <button onClick={nextProduct} className='bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded h-1/2'><FcNext/></button>
      </div>
      </div>
     
        <div className="flex gap-7 overflow-x-scroll scrollbar-none scroll-smooth transition-all"  ref={slideProductRef}>
        { homeProductCartListPizza[0] ? homeProductCartListPizza.map(e1=>{
            return (
              <CardFeature
                key={e1._id}
                id={e1._id}
                image={e1.image}
                name={e1.name}
                price={e1.price}
                category={e1.category}
              />
            )
          })
          :
          loadingArrayFeature.map((e1,index)=> <CardFeature loading="Loading..." key={index}/>)
        }
          
        </div>
      </div>



        <AllProduct heading={"Your Product"}/>

      
      
    </div>
  )
}

export default Home