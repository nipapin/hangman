import { createContext } from "react";

export const style = {
    dark: {
        backgroundColor: "#101020",
        foregroundColor: "#f0f0f0",
        errorColor: "tomato",
        borderColor: "#f0f0f0",
        border: "10px solid #f0f0f0",
        brightness: "brightness(1.1)",
        boxShadow: "0 0 20px #b340ff",
    },
    light: {
        backgroundColor: "#f0f0f0",
        foregroundColor: "#003060",
        errorColor: "tomato",
        borderColor: "#003060",
        border: "10px solid #003060",
        brightness: "brightness(0.9)",
        boxShadow: "none",
    },
};

export const themeContext = createContext({ theme: "light", setTheme: () => {} });
