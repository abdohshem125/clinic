import "./Medicines.css"
import {MedicinesData} from "../../../../data/Medicines"
export const Medicines = ()=>{
    const buymedicine=()=>{
        alert("Done ! Your Medicine Added to Chart .");
    }
    return(
        <>
        <div className="section-padding30">
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 w-100 titlebox">
                        <div class="section-tittle text-center mb-75">
                            <span>Medicines</span>
                            <h2>Most Prescribed Medicines</h2>
                        </div> 
                    </div>
                </div>
                <div className="row">
                    {
                        MedicinesData.map((item)=>{
                            return(
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-">
                                    <div className="med-card ">
                                        <h1>{item.name}</h1>
                                        <div className="underline"></div>
                                        <div className="available"><span className="font-weight-bold">Status :</span> Available in{item.availableIn}</div>
                                        <div className="available"><span className="font-weight-bold">Department :</span> {item.departmentName}</div>
                                        <div className="treat-side">
                                            <div className="chiled">
                                                <h2 className="font-weight-bold">For the treatment of</h2>
                                                {
                                                    item.treatment.map((i)=>{
                                                        return(<div className="option">{i}</div>)
                                                    })
                                                }
                                            </div>
                                            <div className="chiled">
                                                <h2 className="font-weight-bold">Side Efficts</h2>
                                                {
                                                    item.sideEffects.map((i)=>{
                                                        return(<div className="option">{i} </div> )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="text-center">
                                        <button className="btn btn-buy" onClick={buymedicine}>Buy One</button>
                                        </div>
                                    </div>
                                    <div className="directions">
                                            <div className="head">Direction:</div>
                                            <div className="content">{item.directions}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}