import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteCartItem,increaseQty,decreaseQty } from "../redux/productSlice"

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch= useDispatch()

  return (
    <div className="bg-slate-200 p-2 flex gap-4 rounded border border-slate-300">
      <div className="p-3 bg-white rounded overflow-hidden">
        <img src={image} className="h-28 w-40 object-cover" />
      </div>
      <div className=" flex flex-col gap-1 p-2 w-full">
        <div className=" flex justify-between">
          <h3 className="font-semibold text-slate-600  capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div className="cursor- text-slate-700 hover:text-red-500" onClick={()=>dispatch(deleteCartItem(id))}>
            <MdDelete />
          </div>
        </div>
        <p className=" text-slate-500 font-medium ">{category}</p>
        <p className=" font-bold text-red-500 text-base">₹{price}</p>

        <div className="flex justify-between">
          <div className="flex gap-3 items-center">
            <button onClick={()=>dispatch(increaseQty(id))} className="bg-slate-300 rounded px-6 py-2 mt-2 transition ease-in duration-200 uppercase  my-2  hover:bg-blue-600 hover:text-white">{" "}<FaPlus />{" "}
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button onClick={()=>dispatch(decreaseQty(id))} className="bg-slate-300 rounded px-6 py-2 mt-2 transition ease-in duration-200 uppercase  my-2  hover:bg-blue-600 hover:text-white">
              {" "}
              <FaMinus />{" "}
            </button>
          </div>
          <div className=" flex items-center gap-2 font-bold text-slate-700">
            <p>Total :</p>
            <p><span className="text-red-500">₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
