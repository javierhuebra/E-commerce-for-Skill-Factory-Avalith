import "../../StyleSheets/Menu.css"
import { CiHome, CiShop, CiGift, CiViewList, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
const Menu = () =>{
    return(
        <div className="menu">
            <ul className="list">
              
                <li className="li-item home"><span className="li-icon"><CiHome/></span>Home</li>
                <Link to='/products'><li className="li-item"><span className="li-icon"><CiShop/></span>Productos</li></Link>
                <li className="li-item"><span className="li-icon"><CiViewList/></span>Categorys</li>
                <li className="li-item"><span className="li-icon"><CiGift/></span>Ofertas</li>
                <li className="li-item"><span className="li-icon"><CiLocationOn/></span>Green Points</li>
                <Link to='/carrito'><li className="li-item"><span className="li-icon"><CiLocationOn/></span>Carrito</li></Link>
            </ul>
        </div>
    )
}

export default Menu;