import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/formpost.css";
import Callpost from "../model/Callpost";

const FormPost = () => {
  const { id } = useParams();
  const [anPost, setanPost] = useState({});

 useEffect(()=>{
  if (id != undefined) {
    Callpost(id, setanPost);
    }   
 },[])

  const [theTitle, settheTitle] = useState(anPost.title ?? '');
  const [theDescription, settheDescription] = useState( anPost.description ??"");


  
   const addPost = ()=>{
    console.log('add Post');
  }
  const editPost = ()=>{
    console.log(theTitle, theDescription);
  }
  return (
    <div className="main">
      <div className="formPost">
        {id === undefined ? <h1>Add New Post</h1> : <h1>Edit This Post</h1>}
        
        <input
          type="text"
          placeholder="Title post"
          className="imput-f"
          value={ theTitle  }
          onChange={(e) => settheTitle(e.target.value)}
        />
        <textarea
          placeholder="What is the post"
          className="imput-f tarea"
          value={theDescription }
          onChange={(e) => settheDescription( e.target.value  )}
        ></textarea>
        {id === undefined ? (
          <button className="btn-f" onClick={addPost}> Add New post</button>
        ) : (
          <button className="btn-f" onClick={editPost}>Edit this post</button>
        )}
      </div>
    </div>
  );
};

export default FormPost;
