import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/formpost.css";
import Callpost from "../model/Callpost";
import Editpost from "../model/Editpost";
import { urlApi } from "../model/urlapi";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [theTitle, settheTitle] = useState('');
  const [theDescription, settheDescription] = useState('');
  const [theDate, settheDate] = useState('')
  
  useEffect(()=>{
    Callpost(id, settheTitle, settheDescription,settheDate)
   
  },[])
  const Redirecction = () => {
    return navigate("/");
  };


  

  const editPost = () => {
    
    const data = {
      id: id,
      title: theTitle,
      description: theDescription
    }
    Editpost(id, data,Redirecction)
  };

  return (
    <div className="main">
      <div className="formPost">
         <h1>Edit This Post</h1>
     
        <input
          type="text"
          placeholder="Title post"
          className="imput-f"
          value={theTitle}
          onChange={(e) => settheTitle(e.target.value )}
        />
        <textarea  
          placeholder="What is the post"
          className="imput-f tarea"
          value={theDescription}
          onChange={(e) => settheDescription(e.target.value)}
        ></textarea>
            
          <button className="btn-f" onClick={editPost}>
            Edit this post
          </button>
        
      </div>
    </div>
  );
};

export default EditPost;
