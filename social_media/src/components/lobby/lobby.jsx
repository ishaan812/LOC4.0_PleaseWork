import axios from 'axios';
import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

const Signin = () => {
  const [EmailID,SetEmailID]=useState('');
  const [Password,SetPassword]=useState('');

 

  const submit = (e) => {
    e.preventDefault();
    
    
    
  }
  
  
  return (
    <div className='signin'>
        <button className='button' onClick={e=>submit(e)}> Login through Instagram </button>
        <Link to="/"><button className='back'>GO BACK</button></Link>
    </div>
  )
}

export default Signin