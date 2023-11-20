"use client";

import { ProfileContext } from "../contexts/ProfileContext";
import { useContext, useState } from "react";
import { useThemeContext } from "../contexts/ThemeContext";

export const Profile = () => {
    const [ label, setLabel ] = useState("Sair");
    const profileContext = useContext(ProfileContext);
    const themeContext = useThemeContext();

    const logout = () => {
        profileContext?.setLoggedUser("Nenhum usuário logado");
    }

    const login = () => {
        profileContext?.setLoggedUser("Felipe");
    }
    
    console.log(themeContext?.theme);

    return (
        <>
            <button onClick={() => {
                if(profileContext?.loggedUser === "Nenhum usuário logado"){
                    setLabel("Sair");
                    login();
                } else {
                    setLabel("Entrar");
                    logout();
                }
            }}>{profileContext?.loggedUser} - { label }</button>
            <button className={`py-2 px-4 ml-4 ${themeContext?.theme === "DARK" ? "bg-white text-black" : "bg-black text-white"}`}
                onClick={() => {
                    themeContext?.setTheme(themeContext.theme === "DARK" ? "LIGHT" : "DARK");
                }}>
            {themeContext?.theme === "DARK" ? "Light Mode" : "Dark Mode"}
            </button>  
        </>
    );
}