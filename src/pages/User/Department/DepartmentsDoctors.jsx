import React from 'react';
import { DoctorsData } from '../../../data/Doctors';
import { MedicinesData } from '../../../data/Medicines';
import { DepartmentsData } from '../../../data/Departments';


import { Link } from 'react-router-dom';

export const DepartmentsDotors = (props)=>{
    return (
        <>
            <div class="team-area section-padding30">
                <div class="container">
                    {/* <!-- Section Tittle --> */}
                    <div class="row justify-content-center">
                        <div class="col-lg-6">
                            <div class="section-tittle text-center mb-100">
                                <span>Our Doctors</span>
                                <h2>Choose Your Doctor</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            DoctorsData.map((Doctor)=>{
                                if (Doctor.departmentId == props.id) {
                                    return(
                                        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                            <div class="single-team mb-30">
                                                <div class="team-img">
                                                    <Link to={'/doctorprofile?id='+ Doctor.id}><img src={Doctor.img} height="400px" alt=""/></Link>
                                                </div>
                                                <div class="team-caption">
                                                    <h3><Link to={'/doctorprofile?id='+ Doctor.id}>{Doctor.name}</Link></h3>
                                                    <span>{Doctor.departmentName}</span>
                                                    {/* <!-- Team social --> */}
                                                    <div class="team-social">
                                                        <Link to={'/doctorprofile?id='+ Doctor.id}><i class="fab fa-twitter"></i></Link>
                                                        <Link to={'/doctorprofile?id='+ Doctor.id}><i class="fas fa-globe"></i></Link>
                                                        <Link to={'/doctorprofile?id='+ Doctor.id}><i class="fab fa-facebook-f"></i></Link>
                                                        <Link to={'/doctorprofile?id='+ Doctor.id}><i class="fab fa-pinterest-p"></i></Link>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                        
                                    )
                                }else {
                                    return ""
                                }
                            })
                        }
                    </div>
                    
                    <div className="section-padding30">
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 w-100 titlebox">
                        <div class="section-tittle text-center mb-75">
                            <span>Medicines</span>
                            <h2>Our Prescribed Medicines </h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    {
                        MedicinesData.map((item)=>{
                            if(item.departmentID == props.id)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : {props.name}</div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="treat-side">
                                                <div className="chiled">
                                                    <h2 className='font-weight-bold'>For the treatment of</h2>
                                                    {
                                                        item.treatment.map((i)=>{
                                                            return(<div className="option">{i}</div>)
                                                        })
                                                    }
                                                </div>
                                                <div className="chiled">
                                                    <h2 className='font-weight-bold'>Side Efficts</h2>
                                                    {
                                                        item.sideEffects.map((i)=>{
                                                            return(<div className="option">{i} </div> )
                                                        })
                                                        
                                                    }  
                                                </div>
                                            </div>
                                            <div className="text-center">
                                            <button className="btn btn-buy">Buy One</button>
                                            </div>
                                        </div>
                                        <div className="directions">
                                                <div className="head">Direction:</div>
                                                <div className="content">{item.directions}</div>
                                        </div>
                                    </div>
                                )
                            }
                            else{
                                return "";
                            }
                        })
                    }
                </div>
            </div>
        </div>

  

                </div>
                
            </div>
        </>
    )
}