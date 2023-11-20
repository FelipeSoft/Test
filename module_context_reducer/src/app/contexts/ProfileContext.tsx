import { createContext, useState } from "react";

type ProfileContextType = {
    loggedUser: string;
    setLoggedUser: (name: string) => void; 
}

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
    const [ loggedUser, setLoggedUser ] = useState<string>("Felipe");

    return (
        <ProfileContext.Provider value={{ loggedUser, setLoggedUser }}>
            { children }
        </ProfileContext.Provider>
    );
}