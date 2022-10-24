import'../../StyleSheets/SubBar.css'
import { BsFillGeoAltFill,BsChevronRight } from "react-icons/bs";
const SubBar = () =>{
    return(
        <div className='subbar-container'>
            <p className='adress'><span><BsFillGeoAltFill/></span>Send to Javier Huebra - 12 de oct. 178 </p><p className='adress pico'><BsChevronRight/> </p> 
        </div>
    )
}
export default SubBar;