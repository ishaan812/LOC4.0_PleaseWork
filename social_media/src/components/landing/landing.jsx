import React from 'react'
import './landing.scss'

export default function landing() {
  return (
    <div className="landing">
        <div className="left">
            <div className="form">
                <div className="row">
                    <label>Enter username:</label>
                    <input placeholder='Username'></input>
                </div>
                <div className="row">
                    <label>Enter Password:</label>
                    <input placeholder='Password'></input>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="imagebox">
            </div>
        </div>
    </div>
  )
}
