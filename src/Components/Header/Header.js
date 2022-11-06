import '../../StyleSheets/Header.css'
import hojita from '../../Assets/Images/hojita.png'
import lupita from '../../Assets/Images/lupin.png'
import { AiOutlineMenu } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import Menu from "./Menu";

//IMPORTO EL CONTEXTO
import { useMenuContext, useMenuToggleContext } from "../context/MenuProvider";
import { useConfigContext, useConfigToggleContext } from "../context/ConfigProvider";

import Config from './Config';
import { Link } from 'react-router-dom';


const Header = () => {

    const stateMenu = useMenuContext();
    const toggleMenu = useMenuToggleContext();

    const stateConfig = useConfigContext();
    const toggleConfig = useConfigToggleContext();

    
    console.log(stateMenu)

    return (
        <div>
            <div className='header-container' >
                <Link to='/'><img className='logo-img' src={hojita} /></Link>
                <div className='input-container'>
                    <img className='lupita' src={lupita} />
                    <input
                        className='searcher-input'
                        type='text'
                        placeholder="I'm looking for..." />
                </div>
                <p className='menu-logo' onClick={toggleMenu}><AiOutlineMenu/></p>
                <p className='options-logo' onClick={toggleConfig} ><BsGear /></p>
            </div>
            {stateMenu && <Menu/>}
            
            {stateConfig && <Config/>}
        </div>
        )
}
            

export default Header;