import {useState} from 'react'
import Homepage from './Homepage'
import { Route,Routes } from 'react-router-dom'
import Viewpost from './Viewpost';
import AddPost from './addpost';
import EditPost from './editpost';

const Viewroutes = () => {
   

    
  return (
    <Routes>
   
      <Route  path="/" element={<Homepage />} />
      <Route path='/addpost/' element={<AddPost/>}/>
      <Route path='/editpost/:id' element={<EditPost/>}/>
      <Route path='/viewpost/:id' element={<Viewpost/>}/>
      
  </Routes> 
  )
}

export default Viewroutes