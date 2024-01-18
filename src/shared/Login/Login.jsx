import React, { useState } from 'react';
import './Login.css'
import loginPhoto from '../../img/logIn.jpg'
import { Link, useNavigate } from 'react-router-dom';


export default function Login(props) {

    const [username , setUsername]=useState("");
    const [password , setPassword]=useState("");
    const navegate = useNavigate()
    const [errMsg , setErrMsg ]=useState(false);

    const signIn=(e)=>{
        e.preventDefault();
        if(username==="doctor@gmail.com"&& password==="123456"){
            navegate("/doctorinfo")
        }
        else if(username==="manager@gmail.com"&& password==="123456"){
            navegate("/manager")

        }
        else if(username==="user@gmail.com"&& password==="123456"){
            navegate("/home")
        }
        else{
            setErrMsg(true);
        }
    }
    return (
    <div className='OuterloginBox '>
        <div class="login">
        <div class="container">
            <div class="row">
                <div class="col-md-5 p-0 ">
                    <img src={loginPhoto} className='w-100 imgLogin' alt="" />
                </div>
                <div class="col-md-7 text-center inerrloginBox  ">
                    <form onSubmit={signIn}>
                        <h2 >Sign In Page</h2>
                    <div class="inputs ">
                    {errMsg ? <div class="alert alert-danger w-75 m-auto " role="alert">
                        Incorrect Password or Username
                    </div>:""}
                        <input className='inputLogin1' type="email" placeholder="User Name" value={username} 
                        onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                        <input className='inputLogin2' type="password" placeholder="Password" value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <button class="btnlogin text-center" type='submit'> Sign in</button>
                    <p class="text-center forgetText">Don't have an account ?  <Link  to="/register">Sign Up Now</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </div>
    );
}
