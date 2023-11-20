import { Dispatch, createContext, useReducer, useContext, useEffect, useState } from "react";
import { ChatActions, ChatReducer } from "../reducers/ChatReducer";
import { Chat } from "../types/Chat";

export const LOCAL_STORAGE_KEY = "chatStorageContext";

type NewType = {
    chat: Chat[];
    dispatch: Dispatch<ChatActions>;
};

type ChatContextType = NewType;

export const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
    const [ chat, dispatch ] = useReducer(ChatReducer, []);
    const [ theme, setTheme ] = useState(
        localStorage.getItem(LOCAL_STORAGE_KEY) || "light"
    );

    useEffect(()=> {
        if (theme === "dark"){
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem(LOCAL_STORAGE_KEY, theme);
    }, [theme])

    return(
        <ChatContext.Provider value={{ chat, dispatch }}>
            { children }
        </ChatContext.Provider>
    )
}

export const useChatContext = () => useContext(ChatContext);