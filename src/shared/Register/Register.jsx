import React, { useState } from 'react';
import './Register.css';
import RegisterPhoto from '../../img/imgR1.jpg'
import { Link , useNavigate} from 'react-router-dom';
export default function Register() {
  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [errMsg , setErrMsg ]=useState(false);
  const navegate = useNavigate()

  const singUp=(e)=>{
    e.preventDefault();
    if(firstname!=="" && lastname!=="" && email!=="" &&password!==""){
        navegate("/home")
    }
    else{
        setErrMsg(true);
    }
}
  return (
    <>
    <div className='OuterRegisterBox '>
        <div class="register">
        <div class="container">
            <div class="row">
                <div class="col-md-6 text-center inerrRegisterBox  ">
                    <h2 >Sign Up Page</h2>
                    {errMsg ? <div class="alert alert-danger w-75 m-auto " role="alert">
                        Enter All Fields
                    </div>:""}
                    <div class="inputs ">
                        <input className='inputRegister mt-4' type="text" placeholder="Enter First Name" 
                        value={firstname} onChange={(e)=>{setFirstname(e.target.value)}}/><br/>
                        <input className='inputRegister' type="text" placeholder="Enter Last Name"
                        value={lastname} onChange={(e)=>{setLastname(e.target.value)}}/><br/>
                        <input className='inputRegister' type="email" placeholder="Enter Email"
                        value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                        <input className='inputRegister' type="password" placeholder="Enter Strong Password"
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button class="btnregister text-center  " onClick={singUp}>Sign Up</button>
                    <p class="text-center forgetText">Already have an account ?  <Link  to="/login">Sign In </Link></p>
                </div>
                <div class="col-md-6 p-0 ">
                  <div className='imgRegisterContainer'>
                  <img src={RegisterPhoto} className='w-100 imgRegister' alt="" />
                  </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  );
}
