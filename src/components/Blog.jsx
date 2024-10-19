import { Link } from "react-router-dom";
import placeholderImage  from '../assets/404.jpg'


import PropTypes from 'prop-types'

const Blog = ({blog}) => {

    const {cover_image, title, description, published_at, id} = blog;

    return (
        <Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline  bg-gray-900 transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30  ">
                        <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src={cover_image || placeholderImage} />
                        <div className="p-6 space-y-2">
                            <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                            <span className="text-xs  text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
                            <p>{description}</p>
                        </div>
        </Link>
    )
}

Blog.propTypes = {
    blog : PropTypes.object
}

export default Blog

