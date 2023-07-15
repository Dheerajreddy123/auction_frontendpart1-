import React, { useState } from "react";
import logo from "../assest/logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData=useSelector((state)=>state.user)
  console.log(userData.email)
  const dispatch=useDispatch()


  const handleSetShowMenu= ()=>{
    setShowMenu(previous=>!previous)
  }
  const handleLogout=()=>{
    dispatch(logoutRedux())
    toast("Logout successfully")
  }

  // console.log(process.env.REACT_APP_ADMIN_EMAIL)
  const cartItemNumber=useSelector((state)=>state.product.cartItem)
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}

      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </Link>

        <div className=" flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex min-w-[120px] text-center">
            <Link to={""} className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">Home</Link>
            <Link to={"menu/64aa6b5e5a6543c432d259d3"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Menu</Link>
            <Link to={"about"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            <Link to={"contact"} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <Link to={"cart"}><FaShoppingCart />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center ">
              {cartItemNumber.length}
            </div>
            </Link>
          </div>
          <div className="text-slate-600" onClick={handleSetShowMenu}>
            <div className="text-2xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md" >
              { userData.image ? <img src={userData.image} className="h-full w-full"/>:<FaUserAlt />}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col ">
              {
                userData.email === process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">New Product</Link>
              }
                {
                  userData.image ?<p className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105" onClick={handleLogout} >Logout  ({userData.firstName})</p>:<Link to={"login"} className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">Login</Link>
                }
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">Home</Link>
                  <Link to={"menu/64aa6b5e5a6543c432d259d3"} className="px-4 py-1 hover:bg-blue-700 hover:text-white  transition-colors duration-300 ease-in-out transform hover:scale-105">Menu</Link>
                  <Link to={"about"} className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">About</Link>
                  <Link to={"contact"} className="px-4 py-1 hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out transform hover:scale-105">Contact</Link>
                </nav>
                
              </div>
            )}
          </div>
        </div>
        
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
