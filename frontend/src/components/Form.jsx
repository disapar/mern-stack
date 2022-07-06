import {useState} from 'react'
import { useParams } from 'react-router-dom'
const FormPost = () => {
    const id = useParams();
     console.log(id);

     const [theTitle, settheTitle] = useState('');
     const [theDescription, settheDescription] = useState('');

  return (
    <div className='main'>FormPost</div>
  )
}

export default FormPost