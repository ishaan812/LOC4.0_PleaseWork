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
    SetInstaAuth(true);
    }

 const FacebookAuth =(event)=>{
     event.preventDefault();
     axios.get("http://localhost:5000/auth/facebook/", ) //{headers: {'Access-Control-Allow-Origin': "*"}}
     .then(res=>{console.log(res);SetData(res.data);})
     .catch((error) => {
       console.log(error);
     });
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
            <label className="instalabel">Instagram Authenticated : {InstaAuth ? "True" : "False"} </label>
            
        </div>
        <div className="right">
            <div className="face" onClick={event => FacebookAuth(event)}><AiFillFacebook size={300}/></div>
            <label className="facelabel">Facebook Authenticated: {FaceAuth ? "True" : "False"} </label>
        </div>
        
        
        
    </div>
  )
}

export default Signin