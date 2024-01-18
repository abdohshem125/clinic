import Background1 from "../../../../img/gallery/gallery1.png"
import Background2 from "../../../../img/gallery/gallery2.png"
import Background3 from "../../../../img/gallery/gallery3.png"
import Background4 from "../../../../img/gallery/gallery4.png"
import Background5 from "../../../../img/gallery/gallery5.png"
import Background6 from "../../../../img/gallery/gallery6.png"
export const Gallery = ()=>{
return(
    <div class="gallery-area section-padding5">
        <div class="container">
            {/* <!-- Section Tittle --> */}
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="section-tittle text-center mb-100">
                        <span>Our Gellary</span>
                        <h2>Our Medical Camp</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                {/* <!-- Left --> */}
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img big-img" style={{backgroundImage:"url(" + Background1 +")"}}></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img small-img" style={{backgroundImage:"url(" + Background2 +")"}}></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img small-img" style={{backgroundImage:"url(" + Background3 +")"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right --> */}
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img small-img" style={{backgroundImage:"url(" + Background4 +")"}}></div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img small-img" style={{backgroundImage:"url(" + Background5 +")"}}></div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="single-gallery mb-30">
                                <div class="gallery-img big-img" style={{backgroundImage:"url(" + Background6 +")"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}