import { useRoutes } from "react-router-dom"
import Index from "../pages/Index";
import Albums from "../pages/Albums";
import Photo from "../pages/Photo";

export const Router = () => {
    return useRoutes([
        { path: "/",  element: <Index />},
        { path: "/albums/:slug",  element: <Albums />},
        { path: "/photos/:slug",  element: <Photo />},
    ]);
}