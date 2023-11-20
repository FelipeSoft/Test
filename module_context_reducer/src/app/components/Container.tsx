import { ProfileProvider } from "../contexts/ProfileContext";
import { Profile } from "@/app/components/Profile";
import { PostList } from "../components/PostList";
import { PostProvider } from "../contexts/PostContext";
import { useReducer, useState, useContext } from "react";
import { listReducer } from "../reducers/listReducer";
import { useThemeContext } from "../contexts/ThemeContext";

export const Container = () => {
    const themeContext = useThemeContext();
    const [list, dispatch] = useReducer(listReducer, []);
    const [input, setInput] = useState("");

    const handleAdd = (text: string) => {
        if(text.trim() === "") return;
        dispatch({
            type: 'add',
            payload: {
                text: text.trim()
            }
        })
        setInput("");
    }

    const handleToggle = (id: number) => {
        dispatch({
            type: 'toggle',
            payload: {
                id: id
            }
        })
    }

    const handleUpdate = (id: number) => {
        const foundItem = list.find(element => element.id === id);
        if(!foundItem) return;

        let windowPrompt = window.prompt("Editar", foundItem.text);
        if(!windowPrompt || windowPrompt.trim() === "") return;
            
        dispatch({
            type: 'update',
            payload: {
                id: id,
                text: windowPrompt
            }
        })
    }

    const handleDelete = (id: number) => {
        if(!window.confirm("Deseja realmente deletar esse registro?")) return;
        
        dispatch({
            type: 'delete',
            payload: {
                id: id
            }
        })
    }
    return (
        <div className={`w-full min-h-screen px-8
            ${themeContext?.theme === "DARK" ? "bg-black text-white" : "bg-white text-black"}
            `}>
            <div className="py-4 flex items-center">
                <div className="mr-4">
                    <input value={input} className={`h-max py-2 px-4 outline-none border-2 border-gray-400 text-black`} type="text" onChange={(e) => {
                        setInput(e.target.value);
                    }}/>
                    <button className={`py-2 px-4 text-white ${themeContext?.theme === "DARK" ? "bg-blue-900 border-2 border-blue-900 " : " bg-black border-2 border-black"}`} onClick={() => handleAdd(input)}>ADICIONAR</button>
                </div>
                <ProfileProvider>
                    <Profile></Profile>
                </ProfileProvider>
            </div>
            <table className="w-full mb-4"> 
                <thead className="text-xl">
                    <tr>
                        <td className={`p-2 text-white ${themeContext?.theme === "DARK" ? "bg-blue-900" : "bg-black"}`}>ID</td>    
                        <td className={`p-2 text-white ${themeContext?.theme === "DARK" ? "bg-blue-900" : "bg-black"}`}>Texto</td>  
                        <td className={`p-2 text-white ${themeContext?.theme === "DARK" ? "bg-blue-900" : "bg-black"}`}>Status</td>
                        <td className={`p-2 text-white ${themeContext?.theme === "DARK" ? "bg-blue-900" : "bg-black"}`}>Ações</td>
                    </tr>    
                </thead>   
                <tbody>
                {list.map(element => {
                    return(
                        <tr>
                            <td className="p-2 bg-white text-black border-b-2 border-b-gray-400">{element.id}</td>
                            <td className="p-2 bg-white text-black border-b-2 border-b-gray-400">{element.text}</td>
                            <td className="p-2 bg-white text-black border-b-2 border-b-gray-400">{element.done ? "Concluída": "Não concluída"} <input type="checkbox" onClick={() => handleToggle(element.id)} checked={element.done}/></td>
                            <td className="p-2 bg-white text-black border-b-2 border-b-gray-400">
                                <button className="pr-2" onClick={() => handleUpdate(element.id)}>Atualizar</button>
                                <button onClick={() => handleDelete(element.id)}>Excluir</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <PostProvider>
                <PostList/>
            </PostProvider>
        </div>
    );
}