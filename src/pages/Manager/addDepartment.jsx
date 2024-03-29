import React, { useState } from 'react';
import '../Manager/addDepartment.css';
import { Link } from 'react-router-dom';

export default function AddDepartment() {
    const [department , setDepartment ] = useState({
        name :"",
        numOfDoctors:'',    
    });
    const [msg,setMsg]=useState(false);
    const [errmsg,setErrmsg]=useState(false);
    const addDepartment = (e) => {
        if(department.name != "" && department.numOfDoctors != ""){
            setMsg(true);
            setErrmsg(false);
        }else{
            setMsg(false);
            setErrmsg(true);
        }
    };
    return ( 
    <>
        <div class="">
            <div class="containerAddpage">
                <div class="text-center my-5">
                    <h2 > Add New Department</h2>
                    {msg && errmsg==false ?<div class="alert alert-success w-50 m-auto " role="alert">
                        Department Added Succesffully 
                    </div>:""}
                    {errmsg && msg==false ?<div class="alert alert-danger w-50 m-auto " role="alert">
                        Please fill all feilds
                    </div>:""}
                    <div class=" mt-5">
                        <input className='inputRegister ' type="name" placeholder="Enter The name of Department"
                        value={department.name} onChange={(e)=>{setDepartment({...department,name:e.target.value})}}/><br/>
                        <input className='inputRegister' type="number" placeholder="Enter Number of Doctors"
                        value={department.numOfDoctors} onChange={(e)=>{setDepartment({...department,numOfDoctors:e.target.value})}}/><br/>
                    </div>
                    <button class="btnregister text-center" onClick={addDepartment}><Link>Add</Link></button></div>
            </div>
        </div>
    </>
    );
    }
