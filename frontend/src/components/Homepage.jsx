import Listposts from "../model/Listposts"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delpost from "../model/Delpost";

const Homepage = () => {
  const [thePosts, setListPosts] = useState([]);
 
  useEffect(() => {
    Listposts(setListPosts)
    console.log(thePosts);
  }, []);

  const DelAnPost = (id)=>{
    
    if(confirm('delete this post?')){
      Delpost(id,setListPosts)
    }
  }
  return (
    <div className="main section">
      {thePosts.map(post => (<div key={post._id} className="article">
        <h2 className="span-3">{post.title}</h2>
        <p className="span-3">{post.description.slice(0,90)} ...</p>
        <Link to={`/editpost/${post._id}`} className="btn cursor edit">Edit</Link>
        <button  className="btn cursor del" onClick={()=>DelAnPost(post._id)}>Delete</button>
        <Link to={`/viewpost/${post._id}`} className="btn cursor ver">View +</Link>
      </div>
      ))}
    </div>
  )
}

export default Homepage