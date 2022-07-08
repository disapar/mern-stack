import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DateFormat } from "../helpers/date";
import Callpost from "../model/Callpost";

const Viewpost = () => {
 
  let { id } = useParams();
  const [theTitle, settheTitle] = useState('');
  const [theDescription, settheDescription] = useState('');
  const [theDate, settheDate] = useState('')
  useEffect(()=>{
    Callpost(id, settheTitle, settheDescription,settheDate)
   
  },[])


  return (
    <div className="main ">
      <div className="anPost">
        <h1 className="tPost">{theTitle}</h1>
        <p className="dPost">{theDescription}</p>
        <p>{DateFormat(theDate)}</p>
      </div>
    </div>
  );
};

export default Viewpost;
