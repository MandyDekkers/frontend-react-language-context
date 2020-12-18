import React, { createContext, useState } from 'react';

export const LanguageContext = createContext({});

function LanguageContextProvider( { children }){

    const [language, setLanguage] = useState('nl');

    function changeLanguage(){
        setLanguage();
    }

    const data = {
        currentLanguage: language,
        changeLanguage
    }

    return(
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;


