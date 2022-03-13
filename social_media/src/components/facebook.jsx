import React, { useState } from 'react'
import './facebook.css'

const Facebook = () => {
    const [DropDownList,SetDropDownList]=useState("");
  return (
    <div>
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
    <h1 className='tips'> TIPS TO BOOST REACH </h1>
    <p className='list'> BEST TIMES TO POST:
    <ul> <li>The best times to post are Wednesday at 11 am and 1 pm.</li>
    <li>The overall best day is Wednesday</li>
    <li>You will get the most consistent engagement on weekdays from 9 am–3 pm.</li>
    <li>The worst day is Sunday, which sees the least amount of engagement. </li>
    <li>You will find the lowest engagement during early mornings and evenings before 7 am and after 5 pm each day</li>
    </ul>
    </p>
    <br></br>
    <br></br>
    <img src={require('./facebook.jpeg')} alt="time" />

    <br/>
  <select className='dropdown' value={DropDownList} onChange={event=>{SetDropDownList(event.target.value);console.log(event.target.value)}}>
      <option value="Retail">Retail</option>
      <option value="Food and Beverage">Food and Beverage</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Education">Education</option>
      <option value="Travel and Tourism">Travel and Tourism</option>
      <option value="Tech Media and Entertainment">Tech Media and Entertainment</option>
    </select>
    
    </div>
  )
}

export default Facebook