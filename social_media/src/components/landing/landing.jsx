import React from 'react'
import './landing.scss'

export default function landing() {
  return (
    <div className='landing'>
        <div className="left">
            <div className="form">
                <label>Enter username:</label>
                <input placeholder='Username'></input>
                <label>Enter Password:</label>
                <input placeholder='Password'></input>
            </div>
        </div>
        <div className="right">
            <div className="imagebox">
            </div>
        </div>
    </div>
  )
}
