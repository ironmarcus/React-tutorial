import { Link } from "react-router-dom";

const BlogList = (props) => {
    // It appears when I include blogs, title, handleDelete above, it does not work
    const BlogList = (props)
    const blogs = props.blogs;
    // console.log(props, blogs)
    const title = props.title;
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p> Writte by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;