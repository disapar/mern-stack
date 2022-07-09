import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/formpost.css";
import Errormsj from "../helpers/Errormsj";
import Callpost from "../model/Callpost";
import Editpost from "../model/Editpost";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [theTitle, settheTitle] = useState('');
  const [theDescription, settheDescription] = useState('');
  const [theDate, settheDate] = useState('')
  const [erMsj, seterMsj] = useState('');
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
    if(theTitle ===""){
      seterMsj('Add an Title')
     setTimeout(()=>{
       seterMsj("")
     },2500)
      return

   }if(theDescription === ""){
      seterMsj('Add one Description ')
     setTimeout(()=>{
       seterMsj("")
     },2500)
     return
   }
    Editpost(id, data,Redirecction)
  };

  return (
    <div className="main">
      <div className="formPost">
         <h1>Edit This Post</h1>
         {erMsj ? <Errormsj>{erMsj}</Errormsj>:""}
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
