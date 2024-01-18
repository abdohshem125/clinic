import img1 from "../../../../img/gallery/about2.png"
import img2 from "../../../../img/gallery/about1.png"
import { Link } from "react-router-dom";
const About= ()=>{
 return (
    <>
    {/* <!--? About Start--> */}
    <div class="about-area section-padding2">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-10">
                    <div class="about-caption mb-50">
                        {/* <!-- Section Tittle --> */}
                        <div class="section-tittle section-tittle2 mb-35">
                            <span>About Our Company</span>
                            <h2>Welcome To Our Hospital</h2>
                        </div>
                        <p>There arge many variations ohf pacgssages of sorem gpsum ilable, but the majority have suffered alteration in some form, by ected humour, or randomised words whi.</p>
                        <div class="about-btn1 mb-30">
                            <Link to={"/doctors"} class="btn about-btn">Find Doctors <i class="ti-arrow-right"></i></Link>
                        </div>
                        <div class="about-btn1 mb-30">
                            <Link to={"/medicines"}  class="btn about-btn2">Medicines <i class="ti-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="about-img ">
                        <div class="about-font-img d-none d-lg-block">
                            <img src={img1} alt="" />
                        </div>
                        <div class="about-back-img ">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About  End--> */}
    </>
 )
}
export default About;