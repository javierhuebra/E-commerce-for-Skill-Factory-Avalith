import React, { useState } from "react";

const menuContext = React.createContext();
const menuToggleContext = React.createContext();

export const useMenuContext = () => React.useContext(menuContext);

export const useMenuToggleContext = () => React.useContext(menuToggleContext);

export const MenuProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu) ;

    return (
        <menuContext.Provider value={menu}>
            <menuToggleContext.Provider value={toggleMenu}>
                {children}
            </menuToggleContext.Provider>
        </menuContext.Provider>
    );
};