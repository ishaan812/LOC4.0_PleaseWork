import axios from 'axios';
import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { ImInstagram } from 'react-icons/im';

const Lobby = () => {
  const [EmailID,SetEmailID]=useState('');
  const [Password,SetPassword]=useState('');
  const [InstagramAuthenticated,SetAuthenticated]=useState(0);
 
  const InstagramAuthentication=(e)=>{
        e.preventDefault();
        SetAuthenticated(!InstagramAuthenticated);
        console.log(InstagramAuthenticated);

  }

  
  
  return (
    <div className="lobby">
        <button className='button' onClick={e=>InstagramAuthentication(e)}><ImInstagram size={400}/></button>
        <Link to="/" className='button'><button className='back'>GO BACK</button></Link>
    </div>
  )
}

export default Lobby