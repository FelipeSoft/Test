import { Item } from "../types/Item";

type Add = {
    type: "add";
    payload: {
        text: string;
    }
}

type Update = {
    type: "update";
    payload: {
        id: number;
        text: string;
    }
}

type Delete = {
    type: "delete";
    payload: {
        id: number;
    }
}

type Toggle = {
    type: "toggle";
    payload: {
        id: number;
    }
}

type ListActions = Add | Update | Delete | Toggle;

export const listReducer = (list: Item[], action: ListActions): Item[] => {
    switch(action.type){
        case "add":
            return [...list, {
                id: list.length + 1,
                text: action.payload.text,
                done: false
            }]
        case "update":
            return list.map(element => {
                if(element.id === action.payload.id) element.text = action.payload.text;
                return element;
            })
        case "delete":
            return list.filter(element => element.id !== action.payload.id);
        case "toggle": 
            return list.map(element => {
                if(element.id === action.payload.id){
                    element.done = !element.done
                }  
                return element;
            })
        default:
            return list;
    }
}