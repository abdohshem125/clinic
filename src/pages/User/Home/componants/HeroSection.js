import { Link } from "react-router-dom";
import "./hero.css"
const   HeroSection = () => {
  return (
    <>
       {/* <!--? slider Area Start--> */}
    <div class="slider-area position-relative hero" >
        <div class="slider-active">
            {/* <!-- Single Slider --> */}
            <div class="single-slider slider-height d-flex align-items-center">
                <div class="container smalledit">
                    <div class="row">
                        <div class="col-xl-7 col-lg-9 col-md-8 col-sm-9">
                            <div class="hero__caption">
                                <span>Committed to success</span>
                                <h1 class="cd-headline letters scale">We care about your 
                                    <strong class="cd-words-wrapper ml-4">
                                        health
                                    </strong>
                                </h1>
                                <p data-animation="fadeInLeft" data-delay="0.1s">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi uquip ex ea commodo consequat is aute irure.</p>
                                <Link to={"/departs"} class="btn hero-btn" data-animation="fadeInLeft" data-delay="0.5s">Appointment <i class="ti-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default HeroSection;
