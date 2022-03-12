// import axios from 'axios';
import React,{ useState} from 'react';
import {Link} from 'react-router-dom'
import { AiFillInstagram } from 'react-icons/ai';
import './lobby.scss'

const Signin = () => {
  const [EmailID,SetEmailID]=useState('');
  const [Password,SetPassword]=useState('');

 

  const InstaAuth = (event) => {
    event.preventDefault();
    console.log("1");

}
  
  
  return (
    <div className='lobby'>
        <div className="insta" onClick={event => InstaAuth(event)}><AiFillInstagram size={300}/></div>
        <Link to="/"><button className='back'>Go Back</button></Link>
    </div>
  )
}

export default Signin