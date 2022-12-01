import '../styles/BlogList.css';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    return (
      <div className="blog">
        <h2 id="title">{title}</h2>
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written By {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    );
}
export default BlogList;
