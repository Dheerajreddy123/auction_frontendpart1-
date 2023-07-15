import React, { useEffect, useState } from 'react'
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";

const AllProduct = ({heading}) => {
  const productData = useSelector((state) => state.product.productList);
  const categoryList = [...new Set(productData.map((e1) => e1.category))];

  //folter data display
  const [dataFilter, setDataFilter] = useState([]);

  useEffect(() => {
    setDataFilter(productData);
  }, [productData]);

  const handleFilterproduct = (category) => {
    const filter = productData.filter(
      (e1) => e1.category.toLowerCase() === category.toLowerCase()
    );
    setDataFilter(() => {
      return [...filter];
    });
  };

  const loadingArrayFeature=new Array(10).fill(null)

  return (
    <div className="my-5">
      <h2 class="text-5xl font-extrabold dark:text-white mb-5">{heading}</h2>

      <div className=" flex gap-2 justify-center overflow-scroll scrollbar-none">
        {categoryList[0] ?
          categoryList.map((e1) => {
            return (
              <FilterProduct
                category={e1}
                key={e1}
                onClick={() => handleFilterproduct(e1)}
              />
            );
          })
          :
          <div className='min-h-[150px] flex justify-center items-center'>
        <p>Loading...</p>
        </div>
          }

      </div>

      <div className="flex flex-wrap justify-center gap-10 py-4 px-3">
        { dataFilter[0] ? dataFilter.map((el) => {
          return (
            <CardFeature
              key={el._id}
              id={el._id}
              image={el.image}
              name={el.name}
              price={el.price}
              category={el.category}
            />
          );
        })
        :
        loadingArrayFeature.map((e1,index)=>{
            return(
              <CardFeature loading={"Loading..."} key={index+"allProduct"}/>
            )
          })
        }
        
      </div>
    </div>
  );
};

export default AllProduct;
