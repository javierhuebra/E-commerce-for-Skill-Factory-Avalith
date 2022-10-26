import React, {useState} from 'react';

const configContext = React.createContext();
const configToggleContext = React.createContext();

export const useConfigContext = () => React.useContext(configContext);

export const useConfigToggleContext = () => React.useContext(configToggleContext);

export const ConfigProvider = ({ children }) => {
    const [config, setConfig] = useState(null);

    const toggleConfig = () => setConfig(!config) ;

    return (
        <configContext.Provider value={config}>
            <configToggleContext.Provider value={toggleConfig}>
                {children}
            </configToggleContext.Provider>
        </configContext.Provider>
    );
};
