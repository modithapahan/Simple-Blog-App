import { useState, useEffect } from "react";
import "../styles/Home.css";
import useFetch from "../useFetch";
import BlogList from "./BlogList";

const Home = () => {

  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>{error}</div>
      )}
      {isPending && (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <button className="btn btn-primary" type="button" disabled>
            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            &nbsp;Loading...
          </button>
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title={"ALL Details"} />}
    </div>
  );
};

export default Home;
