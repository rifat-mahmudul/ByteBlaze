import { useEffect, useState } from "react"
import { getBlogs } from "../utils";
import Blog from "../components/Blog";

const Bookmarks = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    return (
        <div className="grid px-4 sm:px-8 lg:px-12 py-8  justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)}
        </div>
    )
}

export default Bookmarks
