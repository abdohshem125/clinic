
import React, { useState } from 'react';
import '../Manager/addDepartment.css';
import { Link } from 'react-router-dom';

export default function AddMedicines() {
    const [medicine , setMedicine ] = useState({
        name :"",
        department:"", 
        status:"",
        quanttity:"",   
    });
    const [msg,setMsg]=useState(false);
    const [errmsg,setErrmsg]=useState(false);
    const addDepartment = (e) => {
        if(medicine.name != "" && medicine.department != "" && medicine.status && medicine.quanttity!=""){
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
                    <h2 > Add New Medicine</h2>
                    {msg && errmsg==false ?<div class="alert alert-success w-50 m-auto " role="alert">
                        Medicine Added Succesffully 
                    </div>:""}
                    {errmsg && msg==false ?<div class="alert alert-danger w-50 m-auto " role="alert">
                        Please fill all feilds
                    </div>:""}
                    <div class=" mt-5">
                        <label className='labelInput'>Medicine's Name :</label><br/>
                        <input className='inputRegister ' type="name" placeholder="Enter The name of Medicine"
                        value={medicine.name} onChange={(e)=>{setMedicine({...medicine,name:e.target.value})}}/><br/>
                        <label className='labelInput'>Medicine's Department :</label><br/>
                        <input className='inputRegister' type="text" placeholder="Enter Department"
                        value={medicine.department} onChange={(e)=>{setMedicine({...medicine,department:e.target.value})}}/><br/>
                        <label className='labelInput'>Medicine's Status :</label><br/>
                        <input className='inputRegister' type="text" placeholder="Enter Status"
                        value={medicine.status} onChange={(e)=>{setMedicine({...medicine,department:e.target.value})}}/><br/>
                        <label className='labelInput'>Medicine's Quantity :</label><br/>
                        <input className='inputRegister' type="text" placeholder="Enter Quantity"
                        value={medicine.quanttity} onChange={(e)=>{setMedicine({...medicine,department:e.target.value})}}/><br/>
                        
                    </div>
                    <button class="btnregister text-center" onClick={addDepartment}><Link>Add</Link></button></div>
            </div>
        </div>
    </>
    );
    }
