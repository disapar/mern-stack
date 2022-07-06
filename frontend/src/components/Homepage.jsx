import Listposts from "../model/Listposts"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [thePosts, setListPosts] = useState([]);
  useEffect(() => {
    Listposts(setListPosts)
    console.log(thePosts);
  }, []);
  
  return (
    <div className="main section">
      {thePosts.map(post => (<div key={post._id} className="article">
        <h2 className="span-3">{post.title}</h2>
        <p className="span-3">{post.description.slice(0,90)} ...</p>
        <Link to={`/formpost/${post._id}`} className="btn cursor edit">Edit</Link>
        <button  className="btn cursor del">Delete</button>
        <Link to={`/viewmore/${post._id}`} className="btn cursor ver">View +</Link>
      </div>
      ))}
    </div>
  )
}

export default Homepage