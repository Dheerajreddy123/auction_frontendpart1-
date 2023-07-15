import React, { useState } from "react";
import loginSignupimage from "../assest/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link,useNavigate } from "react-router-dom";
import {ImagetoBase64} from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image:"",
  });
  console.log(data);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const handleOnChange=(e)=>{
    const {name,value}=e.target
    setData((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
  }

  const handleUploadProfileImage=async(e)=>{
    const data=await ImagetoBase64(e.target.files[0])
    console.log(data);

    setData((prev)=>{
        return{
            ...prev,
            image:data
        }
    })
  }
  console.log(process.env.REACT_APP_SERVER_DOMIN);
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const {firstName,email,password,confirmPassword}=data
    if(firstName && email && password && confirmPassword){
        if(password===confirmPassword){
          const fetchData=await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
            method : 'POST',
            headers :{
              "content-type" : "application/json",
            },
            body : JSON.stringify(data),
          })

           const dataRes=await fetchData.json()
           console.log(dataRes)
            // alert(dataRes.message)

            toast(dataRes.message)
            if(dataRes.alert){
              navigate("/login")
            }
            
        }
        else{
            alert("password and confirm password not equal")
        }
    }
    else{
        alert("please enter required fields")
    }
  }

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <div className="w-20 h-full overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
          <img src={data.image ?data.image:loginSignupimage} className="w-full flex flex-col h-full" />
          
          <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-white">upload</p>
          </div>
          <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
        </div>
        <form className="w-full py-3" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-400"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-400">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          {/* <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer">Signup</button> */}
          <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded p-2 mt-3">
            Signup
          </button>
        </form>
        <p className="text-left">
          Already have account ?{" "}
          <Link to={"/login"} className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
