"use client";

import { createContext, useState, useContext, useEffect } from "react";

const LOCAL_STORAGE_KEY = "localStorageThemeContext";

type ThemeContext = {
    theme: string;
    setTheme: (newTheme: string) => void;
}

export const ThemeContext = createContext<ThemeContext | null>(null);

export const ThemeProvider = ({ children }:  { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(localStorage.getItem(LOCAL_STORAGE_KEY) || "DARK");

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme])
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            { children }
        </ThemeContext.Provider>
    );
}

export const useThemeContext = () => useContext(ThemeContext);