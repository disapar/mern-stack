import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/formpost.css";
import Addpost from "../model/Addpost";

const AddPost = () => {
  const navigate = useNavigate();
  const [theTitle, settheTitle] = useState("");
  const [theDescription, settheDescription] = useState("");

  const addPost = () => {
    const data = {
      title: theTitle,
      description: theDescription
    };

    Addpost(data, Redirecction);
  };

  const Redirecction = () => {
    return navigate("/");
  };

  return (
    <div className="main">
      <div className="formPost">
        <h1>Add New Post</h1>

        <input
          type="text"
          placeholder="Title post"
          className="imput-f"
          value={theTitle}
          onChange={(e) => settheTitle(e.target.value)}
        />
        <textarea
          placeholder="What is the post"
          className="imput-f tarea"
          value={theDescription}
          onChange={(e) => settheDescription(e.target.value)}
        ></textarea>

        <button className="btn-f" onClick={addPost}>
          {" "}
          Add New post
        </button>
      </div>
    </div>
  );
};

export default AddPost;
