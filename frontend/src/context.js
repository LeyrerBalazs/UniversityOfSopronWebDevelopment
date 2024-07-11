/***********/
/* Imports */
/***********/
// Default imports
import React, { createContext, useContext, useState } from 'react'

/***********/
/* Context */
/***********/
const siteContext = createContext();
export const ContextProvider = ({ children }) => {
    // Hooks
    const [auth, setAuth] = useState();
    // Provide
    return (
        <siteContext.Provider value={{ auth, setAuth }}>
            {children}
        </siteContext.Provider>
    );
}

/***********/
/* Exports */
/***********/
// useSiteContext export function
export const useSiteContext = () => {
    const context = useContext(siteContext);
    return context;
}
