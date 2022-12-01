import { useParams, useHistory } from "react-router-dom";
import useFetch from '../useFetch';
import '../styles/BlogDetails.css';

const BlogDetails = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        })
    }

    return (
      <div className="blog-details">
        {isPending && (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              &nbsp;Loading...
            </button>
          </div>
        )}
            {error && <div>{error}</div>}  
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written By {blog.author}</p>
            <div>{blog.body}</div>
            <button className="btn btn-danger" onClick={handleClick}><i class="fa-solid fa-trash"></i>Delete</button>
                </article>
            )}
      </div>
    );
}
 
export default BlogDetails;