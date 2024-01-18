import React from 'react';
import { DoctorsData } from '../../../data/Doctors';
import "./Doctors.css";
import { Link } from 'react-router-dom';



export default function Doctors() {
    return (
    <>
    <div class="team-area section-padding30">
        <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-tittle text-center mb-100">
                        <span className='m-1'>Our Doctors </span>
                        <h2 className='m-0 p-0'>Choose Your Doctor</h2>
                    </div>
                </div>
            </div>
            <div class="row " >
                {
                    DoctorsData.map((Doctor)=>{
                            return(
                                <div class="col-xl-4 col-lg-4 col-md-6 col-sm- ">
                                    <div class="single-team mb-30 editdoc">
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
                    })
                }
            </div>
        </div>
    </div>
    </>
  );
}
