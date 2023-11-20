import { useState } from "react";
import { LOCAL_STORAGE_KEY, useChatContext } from "../contexts/ChatContext";
import { Message } from "./Message";

export const Chat = () => {
    const chatContext = useChatContext();
    const [ message, setMessage ] = useState({bot: "", user: ""});

    const getDate = (date: Date) => {
        const abbreviations = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        return `${abbreviations[date.getMonth()]}, ${date.getDate()}`
    }
    
    const handleMessageUser = () => {
        chatContext?.dispatch({type: "newMessage", 
        payload: {
            user: "Felipe",
            message: message.user,
            date: getDate(new Date)
        }})
    }
    const handleMessageBot = () => {
        chatContext?.dispatch({type: "newMessage", 
        payload: {
            user: "Bot",
            message: message.bot,
            date: getDate(new Date)
        }})
    }

    return (
        <div className="h-screen w-screen flex flex-col justify-between xl:w-1/2">
            <div className="bg-gray-200 p-4 flex items-center justify-between dark:bg-gray-950">
                <h1 className="text-black font-bold text-2xl dark:text-white">Context React Chat</h1>
                <div>
                    <button className="bg-black py-2 px-4 rounded-md text-white dark:bg-white dark:text-black">Limpar</button>
                    <p className="text-black dark:text-white">
                        {localStorage.getItem(LOCAL_STORAGE_KEY) === "dark" && "Light Mode"}  
                        {localStorage.getItem(LOCAL_STORAGE_KEY) === "light" && "Dark Mode"}                                           
                    </p>
                </div>
            </div>
            <div className="bg-white h-full overflow-y-auto p-4 dark:bg-gray-900">
                <p className="text-gray-400 text-center">Inicie uma conversa</p>
                {chatContext?.chat.map(element => {
                    return <Message message={element.message} user={element.user}></Message>
                })}
            </div>
            <div className="bg-gray-200 flex flex-col dark:bg-gray-950">
                <div className="w-full p-4 flex items-center">
                    <button onClick={handleMessageUser} className="text-white py-2 px-4 rounded-md mr-4 outline-none text-xs dark:bg-white dark:text-black">Enviar</button>
                    <input onChange={(e) => setMessage({...message, user: e.target.value})} className="text-black outline-none w-full h-10 border-2 border-gray-300 rounded-md px-4" placeholder="Digite uma mensagem" type="text" />
                </div>
                <div className="w-full p-4 flex items-center">
                    <button onClick={handleMessageBot} className="text-white py-2 px-4 rounded-md mr-4 outline-none text-xs dark:bg-white dark:text-black">Enviar</button>
                    <input onChange={(e) => setMessage({...message, bot: e.target.value})} className="text-black outline-none w-full h-10 border-2 border-gray-300 rounded-md px-4" placeholder="Digite uma mensagem" type="text" />
                </div>
            </div>
        </div>
    );
}