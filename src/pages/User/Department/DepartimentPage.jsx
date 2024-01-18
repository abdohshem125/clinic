import { useSearchParams } from "react-router-dom"
import { DepartmentsData } from "../../../data/Departments"
import { useState , useEffect} from "react"
import Image from "../../../img/hero/hero2.png"
import { DepartmentsDotors } from "./DepartmentsDoctors"
export const DepartmentPage = (props)=> {
    const [queryParameters] = useSearchParams()
    const id = queryParameters.get("id")
    const [Data , setDate] = useState({
        id:0,
        name : "",
        img: Image,
    })

    useEffect(() => {
        DepartmentsData.map((item) => {
            if (item.id == id) {
                setDate(item)
            }
        })
        
    }, [id,Data]);
    return(
        <>
            <main>
                <div class="slider-area2" style={{backgroundImage : "url("+ Data.img +")",backgroundPosition:"center"}}>
                    <div class="slider-height2 d-flex align-items-center">
                        <div class="container">
                            <div class="row">
                            <div class="col-xl-12">
                                <div class="hero-cap hero-cap2 text-center">
                                    <h2 style={{color:"blue"}}>{Data.name}</h2>
                                </div>
                            </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <DepartmentsDotors id={id} name={Data.name} />
            </main>
        </>
    )
}