import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children : [
            {
                path : '/',
                element : <Home></Home>,
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>,
                loader : ()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
            },
            {
                path : '/bookmarks',
                element : <Bookmarks></Bookmarks>,
            },
        ]
    },
]);