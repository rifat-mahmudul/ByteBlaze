import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import Details from "../pages/Details";
import Content from "../components/Content";
import Author from "../components/Author";

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
                path : '/blog/:id',
                element : <Details></Details>,
                loader : ({params})=>
                    fetch(`https://dev.to/api/articles/${params.id}`),
                children : [
                    {
                        index : true,
                        element : <Content></Content>
                    },
                    {
                        path : 'author',
                        element : <Author></Author>
                    },
                ]
            },
            {
                path : '/bookmarks',
                element : <Bookmarks></Bookmarks>,
            },
        ]
    },
]);