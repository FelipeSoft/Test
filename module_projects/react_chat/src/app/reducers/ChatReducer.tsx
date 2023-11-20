import { Chat } from "../types/Chat";

type NewMessage = {
    type: "newMessage";
    payload: {
        user: string;
        message: string;
        date: string;
    }
}

export type ChatActions = NewMessage;

export const ChatReducer = ( chat: Chat[], actions: ChatActions ) => {
    switch(actions.type){
        case "newMessage":
            return [
                ...chat, {
                    user: actions.payload.user,
                    message: actions.payload.message,
                    date: actions.payload.date
                }
            ]
    }
}