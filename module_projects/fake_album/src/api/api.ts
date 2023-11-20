import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const api = {
    getAlbums: async () => {
        const request = await instance.get("/albums");
        const response = await request.data;
        return response;
    },

    getAlbumById: async (id: number) => {
        const request = await instance.get(`/albums/${id}`);
        const response = await request.data;
        return response;
    },

    getAllPhotosOfAnAlbumById: async (id: number) => {
        const request = await instance.get(`/albums/${id}/photos`);
        const response = await request.data;
        return response;
    },

    getPhotoById: async (id: number) => {
        const request = await instance.get(`/photos/${id}`);
        const response = await request.data;
        return response;
    }
}