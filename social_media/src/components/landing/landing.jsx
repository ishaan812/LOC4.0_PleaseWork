import React, { useEffect, useRef } from 'react'
import './landing.scss'
import {Link} from "react-router-dom";
import {init} from 'ityped';



export default function Landing() {
  const Noun = useRef();

  useEffect(()=>{
    init(Noun.current,
    {strings: ['Influencer', 'Celebrity' ,'Fashionista', 'Marketing Mogul'],
    backdelay: 40,loop:true})});
  
  
  return (
    <div className="landing">
      <div className="page">
        <div className="wrapper">
          <div className="left">
          </div>
          <div className="middle">
            <div className="middlewrap">
              <div className="name">Stalkr</div>
              <div className="description">Social Media Analytics for the Ultimate<b><div className="ityped" ref={Noun}/></b></div>
            </div>
            <div className="buttons">
              <Link to="/signin"><button className='btn'>Login</button></Link>
              <Link to="/signup"><button className='btn'>Signup</button></Link>
            </div>
          </div>
          <div className="right">
            
          </div>
          </div>
        </div>
      </div>
      // {/* <div className="buttons">
      //   
      // </div> */}
               
  )
}
