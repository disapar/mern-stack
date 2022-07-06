import {useState} from 'react'
import Homepage from './Homepage'
import Viewmore from './viewmore';
import FormPost from './Form';
import { Route,Routes } from 'react-router-dom'


const Viewroutes = () => {
    

    
  return (
    <Routes>
   
      <Route  path="/" element={<Homepage />} />
      <Route path='/formpost/:id' element={<FormPost/>}/>
      <Route path='/viewmore/:id' element={<Viewmore/>}/>
      
  </Routes> 
  )
}

export default Viewroutes