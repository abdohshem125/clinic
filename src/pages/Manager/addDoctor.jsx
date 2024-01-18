import React, { useState } from 'react';
import '../Manager/addDepartment.css';
import { Link } from 'react-router-dom';

export default function AddDoctor() {
    const [doctor , setDoctor ] = useState({
        image:"",
        name :"",
        department:"",    
    });
    const [msg,setMsg]=useState(false);
    const [errmsg,setErrmsg]=useState(false);
    const addDepartment = (e) => {
        if(doctor.name != "" && doctor.department != "" && doctor.image){
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
                    <h2 > Add New Doctor</h2>
                    {msg && errmsg==false ?<div class="alert alert-success w-50 m-auto " role="alert">
                        Doctor Added Succesffully 
                    </div>:""}
                    {errmsg && msg==false ?<div class="alert alert-danger w-50 m-auto " role="alert">
                        Please fill all feilds
                    </div>:""}
                    <div class=" mt-5">
                        <label className='labelInput'>Doctor's Name :</label><br/>
                        <input className='inputRegister ' type="name" placeholder="Enter The name of Doctor"
                        value={doctor.name} onChange={(e)=>{setDoctor({...doctor,name:e.target.value})}}/><br/>
                        <label className='labelInput'>Doctor's Department :</label><br/>
                        <input className='inputRegister' type="text" placeholder="Enter Department"
                        value={doctor.department} onChange={(e)=>{setDoctor({...doctor,department:e.target.value})}}/><br/>
                        <label className='labelInput'>Doctor's Photo :</label><br/>
                        <input className='inputRegister' type="file" placeholder="Enter Doctor's Photo"
                        value={doctor.image} onChange={(e)=>{setDoctor({...doctor,image:e.target.value})}}/><br/>
                    </div>
                    <button class="btnregister text-center" onClick={addDepartment}><Link>Add</Link></button></div>
            </div>
        </div>
    </>
    );
    }
