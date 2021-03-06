import axios from 'axios';
import React,{ useState} from 'react';
import {Link} from 'react-router-dom'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';
import './lobby.scss'

const Signin = () => {
  const [InstaAuth,SetInstaAuth]=useState(false);
  const [FaceAuth,SetFaceAuth]=useState(false);
  const [Data,SetData]=useState();


 

  const InstagramAuth = (event) => {
    event.preventDefault();
    window.location.replace("http://localhost:3000/instagram");
    }

 const FacebookAuth =(event)=>{
     event.preventDefault();
     window.location.replace("http://localhost:3000/facebook");
     
 }
  
  
  return (
    <div className='lobby'>
      <div className="background-wrap">
    <div className="bubble x1"></div>
    <div className="bubble x2"></div>
    <div className="bubble x3"></div>
    <div className="bubble x4"></div>
    <div className="bubble x5"></div>
    <div className="bubble x6"></div>
    <div className="bubble x7"></div>
    <div className="bubble x8"></div>
    <div className="bubble x9"></div>
    <div className="bubble x10"></div>
</div>
        <div className="left">
            <div className="insta" onClick={event => InstagramAuth(event)}> <AiFillInstagram size={300}/></div>
        </div>
        <div className="right">
            <div className="face" onClick={event => FacebookAuth(event)}><AiFillFacebook size={300}/></div>
        </div>
        
        
        
    </div>
  )
}

export default Signin