import NotFound from '../pages/NotFound';
import { GeneralAbout } from '../pages/GeneralAbout';
import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';

export const MainRoutes = () => {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/about/:slug", element: <GeneralAbout /> },
        { path: "*", element: <NotFound /> }
    ])
}