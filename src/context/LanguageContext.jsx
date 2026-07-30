import { createContext, useContext, useMemo, useState } from "react";
import { languages } from "../content";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {

    const [language, setLanguage] = useState(
        localStorage.getItem("language") || "es"
    );

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const value = useMemo(() => ({
        language,
        changeLanguage,
        text: languages[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
    return useContext(LanguageContext);
}

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};