import "../../StyleSheets/Menu.css"
import { CiHome, CiShop, CiGift, CiViewList, CiLocationOn } from "react-icons/ci";
const Menu = () =>{
    return(
        <div className="menu">
            <ul className="list">
                <li className="li-item home"><span className="li-icon"><CiHome/></span>Home</li>
                <li className="li-item"><span className="li-icon"><CiShop/></span>Productos</li>
                <li className="li-item"><span className="li-icon"><CiViewList/></span>Categorys</li>
                <li className="li-item"><span className="li-icon"><CiGift/></span>Ofertas</li>
                <li className="li-item"><span className="li-icon"><CiLocationOn/></span>Green Points</li>
            </ul>
        </div>
    )
}

export default Menu;