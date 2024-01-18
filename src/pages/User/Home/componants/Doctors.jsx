import { Link } from "react-router-dom"
import { DoctorsData } from "../../../../data/Doctors"
export const Doctors = ()=>{
    return(
        <>
        <div class="team-area section-padding20">
            <div class="container">
                {/* <!-- Section Tittle --> */}
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="section-tittle text-center mb-100">
                            <span>Our Doctors</span>
                            <h2>Our Specialist</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {/* <!-- single Tem --> */}
                    {
                        DoctorsData.map((Doctor,index)=>{
                            if (index < 3) {
                                return(
                                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-">
                                        <div class="single-team mb-50">
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
                            }
                            else {
                                return ""
                            }
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}