import { createContext, useReducer, Dispatch, useContext, useEffect } from "react";
import { Post } from "@/app/types/Post";
import { postReducer, PostAction } from "../reducers/postReducer";

type PostContextType = {
    posts: Post[];
    dispatch: Dispatch<PostAction>;
}

export const PostContext = createContext<PostContextType | null>(null);

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
    const LOCAL_STORAGE_KEY = "localStoragePostContext";
    
    const [ posts, dispatch ] = useReducer(
        postReducer, 
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY ) || "[]") 
    );  

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
    }, [posts])

    return (
        <PostContext.Provider value={{ posts, dispatch }}>
            { children }
        </PostContext.Provider>
    );
}

export const usePostContext = () => useContext(PostContext);