import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const posts = async () => {
    try {
        const request = await api.get("/posts");
        const response = await request.data;
        return response;
    } catch (error) {
        console.error(error);
    }
}



