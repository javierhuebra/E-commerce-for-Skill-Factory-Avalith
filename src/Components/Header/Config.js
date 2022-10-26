import '../../StyleSheets/Config.css'
import { AiOutlineUser, AiOutlinePushpin, AiOutlineCloseCircle } from "react-icons/ai";
const Config = () =>{
    return(
        <div className="config-container">
            <ul className="list-config">
                <li className="li-item-cf"><span className="li-icon-cf"><AiOutlineUser/></span>Profile</li>
                <li className="li-item-cf"><span className="li-icon-cf"><AiOutlinePushpin/></span>My Adress</li>
                <li className="li-item-cf"><span className="li-icon-cf"><AiOutlineCloseCircle/></span>Log Out</li>
            </ul>
        </div>
    )
}

export default Config;