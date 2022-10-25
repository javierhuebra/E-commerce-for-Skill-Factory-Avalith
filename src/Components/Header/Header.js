import '../../StyleSheets/Header.css'
import hojita from '../../Assets/Images/hojita.png'
import lupita from '../../Assets/Images/lupin.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import Menu from "./Menu";

//IMPORTO EL CONTEXTO
import { useMenuContext, useMenuToggleContext } from "../context/MenuProvider";


const Header = () => {

    const stateMenu = useMenuContext();
    const toggleMenu = useMenuToggleContext();

    return (
        <div>
            <div className='header-container'>
                <img className='logo-img' src={hojita} />
                <div className='input-container'>
                    <img className='lupita' src={lupita} />
                    <input
                        className='searcher-input'
                        type='text'
                        placeholder="I'm looking for..." />
                </div>
                <p className='menu-logo' onClick={toggleMenu}><AiOutlineMenu /></p>
                <p className='options-logo'><BsGear /></p>
            </div>
            {stateMenu && <Menu/>}
        </div>
        )
}
            

export default Header;