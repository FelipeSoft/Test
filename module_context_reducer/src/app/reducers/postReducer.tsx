import { Post } from "../types/Post";

type Add = {
    type: "add",
    payload: {
        title: string,
        subtitle: string
    }
}

type Remove = {
    type: "remove",
    payload: {
        id: number
    }
}

export type PostAction = Add | Remove;

export const postReducer = (posts: Post[], action: PostAction) => {
    const auto_increment = (array: any[]) => {
        if (array.length === 0) {
            return null; 
        }
        
        let max = array[0].id;
        for (let i = 1; i < array.length; i++) {
            if (array[i].id > max) {
                max = array[i].id;
            }
        }

        return max;
    }

    switch(action.type){
        case "add":
            return [...posts, {
                id: auto_increment(posts) + 1,
                title: action.payload.title,
                subtitle: action.payload.subtitle
            }]
        case "remove":
            return posts.filter(element => element.id !== action.payload.id);
        default: 
            return posts;
    }
}