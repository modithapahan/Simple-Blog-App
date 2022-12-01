import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false)
  const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('New blog added');
            setIsPending(false);
          history.push('/');
        }) 
    }

    return (
      <div className="create">
        <h2 style={{ textAlign: "center" }}>Add a New Blog</h2>

        <form style={{ margin: "20px" }} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">Blog Title</label>
                    <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputBody" className="form-label">Blog Body</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputAuthor" className="form-label">Blog Author</label>
                <select className="form-select" aria-label="Default select example" value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="mario">mario</option>
              <option value="yoshi">yoshi</option>
            </select>
          </div>
            { !isPending && <button type="submit" className="btn btn-primary">Add Blog</button> }
            { isPending && <button type="submit" className="btn btn-primary" disabled>Adding Blog...</button> }    
        </form>
      </div>
    );
}
 
export default Create;