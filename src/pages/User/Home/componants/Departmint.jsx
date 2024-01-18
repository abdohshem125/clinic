import { Link } from "react-router-dom"
import "../componants/Department.css"


export const Departmint = ()=>{
    return(
        <div class="department_area section-padding2">
        <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-tittle text-center mb-100">
                        <span>Our Departments</span>
                        <h2>Our Medical Services</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="depart_ment_tab mb-30">
                        {/* <!-- Tabs Buttons --> */}
                        <ul class="nav" >
                            <li >
                                <Link className="hi" to={"/departments?id=1"}>
                                    <i class="flaticon-teeth"></i>
                                    <h4>Dentistry</h4>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="hi" to={"/departments?id=2"}>
                                    <i class="flaticon-cardiovascular"></i>
                                    <h4>Cardiology</h4>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="hi" to={"/departments?id=3"}>
                                    <i class="flaticon-ear"></i>
                                    <h4>ENT Specialists</h4>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="hi" to={"/departments?id=4"}>
                                    <i class="flaticon-lung"></i>
                                    <h4>Neuroanatomy</h4>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link className="hi" to={"/departments?id=5"}>
                                    <i class="flaticon-cell"></i>
                                    <h4>Blood Screening</h4>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}