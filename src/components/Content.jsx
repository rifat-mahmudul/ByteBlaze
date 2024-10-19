import { useLoaderData } from "react-router-dom"
import placeholderImage  from '../assets/404.jpg'

    const Content = () => {

    const blog = useLoaderData();
    const {cover_image, title, body_html, tags} = blog;

    return (
        <div className="mx-auto group hover:no-underline focus:no-underline  border-2 border-primary border-opacity-30 p-2 ">
                        <img role="presentation" className="object-cover w-full rounded h-44  bg-gray-500" src={cover_image || placeholderImage} />
                        <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-400">
                            {tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-violet-400 text-gray-900">{tag}</a>)}
                        </div>

                        <h3 className="font-bold text-xl mb-4">{title}</h3>

                        {
                            body_html
                        }
        </div>
    )
}

export default Content
