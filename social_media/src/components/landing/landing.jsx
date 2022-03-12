import React from 'react'
import './landing.scss'
import {Link} from "react-router-dom";

export default function landing() {
  return (
    <div className="landing">
        <Link to="/signin"><button>Login</button></Link>
        <Link to="/signup"><button>Signup</button></Link>
    </div>            
  )
}
