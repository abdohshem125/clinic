import React from 'react';
import "../Manager/Manager.css";
import { DepartmentsData } from '../../data/Departments';
import { DoctorsData } from '../../data/Doctors';
import { MedicinesData } from '../../data/Medicines';
import { Link } from 'react-router-dom';
export default function Manger() {
  return (
    <>
    <div className='container my-5'>
      
      
        {/* Department Section */}
        <div className='titlesection'>
            <h1>Manage Departments</h1>
            <button className='btn btn-info'><Link to={"/addDepartment"}>Add New Department</Link></button>
        </div>
        <table className='text-center tableAppoints fw-b'>
        <thead  >
      <tr>
        <th>ID</th>
        <th>Department Name</th>
        <th>Number of Doctors</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        DepartmentsData.map((department)=>{
            return(
              <tr>
                <td>{department.id}</td>
                <td>{department.name}</td>
                <td>{department.numOfDoctors}</td>
                <td><button className='me-2 btn-warning actionButton'>Update</button> <button className='actionButton btn-danger'>Delete</button> </td>
              </tr>
            )
        })
      }
    </tbody>
        </table>
        <div className='line'>
        </div>

        
        {/* Doctors section */}
        <div className='titlesection'>
            <h1>Manage Doctors</h1>
            <button className='btn btn-info'><Link to={"/addDoctor"}>Add New Doctor</Link></button>
        </div>
        <table className='text-center tableAppoints fw-b'>
        <thead  >
      <tr>
      <th>Profile</th>
        <th>ID</th>
        <th>Name</th>
        <th>departmentName</th>
        <th>rate</th>
        <th>Actions</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        DoctorsData.map((doctor)=>{
            return(
              <tr>
                <td> <img className='doctorImage' src={doctor.img} alt="" /></td>
                <td>{doctor.id}</td>
                <td>{doctor.name}</td>
                <td>{doctor.departmentName}</td>
                <td>{doctor.rate}</td>
                <td><button className='me-2 btn-warning actionButton'>Update</button> <button className='actionButton btn-danger'>Delete</button> </td>
              </tr>
            )
        })
      }
    </tbody>
        </table>
        <div className='line'>
        </div>
        
        <div className='titlesection'>
            <h1>Manage Medicinces</h1>
            <button className='btn btn-info' ><Link to={"/addMedicies"}>Add New Medicines</Link></button>
        </div>

        <div className="section">
            <div className="container">
             
                <div className="row">
                {
                        MedicinesData.map((item)=>{
                            if(item.departmentID == 1)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : Dentistry</div>
                                            <div className="available"> <span className='font-weight-bold'> Quantity</span> : {item.quantity} items</div>
                                            <div className="text-center buttons">
                                            <button className="btn-warning actionButtonMedicine mx-5">Upadte</button>
                                            <button className="actionButtonMedicine btn-danger">Delete</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                            else if(item.departmentID == 2)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : Cardiology</div>
                                            <div className="available"> <span className='font-weight-bold'> Quantity</span> : {item.quantity} items</div>
                                            <div className="text-center buttons">
                                            <button className="btn-warning actionButtonMedicine mx-5">Upadte</button>
                                            <button className="actionButtonMedicine btn-danger">Delete</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                            else if(item.departmentID == 3)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : ENT Spitialists</div>
                                            <div className="available"> <span className='font-weight-bold'> Quantity</span> : {item.quantity} items</div>
                                            <div className="text-center buttons">
                                            <button className="btn-warning actionButtonMedicine mx-5">Upadte</button>
                                            <button className="actionButtonMedicine btn-danger">Delete</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                            if(item.departmentID == 4)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : Neuroanatomy</div>
                                            <div className="available"> <span className='font-weight-bold'> Quantity</span> : {item.quantity} items</div>
                                            <div className="text-center buttons">
                                            <button className="btn-warning actionButtonMedicine mx-5">Upadte</button>
                                            <button className="actionButtonMedicine btn-danger">Delete</button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            }
                            if(item.departmentID == 5)
                            {
                                return(
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                        <div className="med-card ">
                                            <h1>{item.name}</h1>
                                            <div className="underline mb-4 mt-3"></div>
                                            <div className="available"> <span className='font-weight-bold'> Status</span> : Available in{item.availableIn}</div>
                                            <div className="available"> <span className='font-weight-bold '> Department</span> : Blood Screening</div>
                                            <div className="available"> <span className='font-weight-bold'> Quantity</span> : {item.quantity} items</div>
                                            <div className="text-center buttons">
                                            <button className="btn-warning actionButtonMedicine mx-5">Upadte</button>
                                            <button className="actionButtonMedicine btn-danger">Delete</button>
                                            </div>
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
    </>
  );
}
