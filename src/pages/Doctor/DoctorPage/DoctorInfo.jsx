import React from 'react';

import doctorImg from "../../../img/gallery/team2.png";
import commentImg from "../../../img/gallery/team1.png";
import './DoctorInfo.css';
import { DoctorsData } from '../../../data/Doctors';
import { AppointmentsData } from '../../../data/Appointments';
import { CommentsData } from '../../../data/Comments'
export default function DoctorInfo() {

  return (
    <>
      <div className='container mt-5 '>
        <div className='row mb-5'>
          <div className='col-md-5 offset'>
            <img src={doctorImg} className='doctorImg' alt="" />
          </div>
          <div className='col-md-6 doctorInfo mt-4'>
            {
              DoctorsData.map((doctor)=>{
                if (doctor.id === 1) {
                  return(
                    <div>
                      <h1>{doctor.name}</h1>
                      <h2>Department : <span>{doctor.departmentName}</span> </h2>
                      <h2>Scientific Degree : <span> Master's Degree in {doctor.departmentName}</span> </h2>
                      <h2 className='rate'>Rate :</h2>
                      <h2 className='stars'>&#9733; &#9733; &#9733; &#9734; &#9734;</h2>
                    </div>
                  )
                }else{
                  return ""
                }
              })
            }
          </div>
        </div>
        <div className='appoints'>
        <h1 className='mt-3 text-center'>Your Appointments This Week</h1>
        <table className='text-center tableAppoints fw-b'>
        <thead  >
      <tr>
        <th>Patient Name</th>
        <th>Age</th>
        <th>Condition</th>
        <th>Day</th>
        <th>Time</th>
        
      </tr>
    </thead>
    <tbody>
      {
        AppointmentsData.map((appointment)=>{
          if (appointment.doctorId === 1) {
            return(
              <tr>
                <td>{appointment.patientName}</td>
                <td>{appointment.Age}</td>
                <td>{appointment.condition}</td>
                <td>{appointment.day}</td>
                <td>{appointment.time}</td>
              </tr>
            )
          }else{
                  return ""
                }
        })
      }
    </tbody>
        </table>
        </div>

        {/* comments  */}
         <div className='comments mb-5'>
          <h2>
          Patients's Comments (Your Feedback):
          </h2>
              {
                CommentsData.map((comment)=>{
                  if (comment.doctorId === 1) {
                    return(
                      <div className="container comment-container">
                          <div className="comment">
                            <img src={commentImg}  alt="User" class="img-fluid"/>
                            <div className="comment-details">
                              <h3>{comment.name}</h3>
                              <p>{comment.comment}</p>
                            </div>
                              </div>
                      </div>
                    )
                  }else{
                  return (
                    <h2></h2>
                  )
                }
                })
              }
          </div>
      </div>
    </>
  );
}
