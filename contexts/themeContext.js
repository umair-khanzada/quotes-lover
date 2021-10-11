import { createContext, useReducer } from 'react';

export const ThemeContext = createContext('light');

const initialTheme = {
    mode: "light"
};
const ThemeReducer = (state, { type, data }) => {
    switch (type) {
        case "dark":
            return "dark";
        case "light":
            return "light"
        default:
            return state;
    }
};

const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, initialTheme.mode);
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;