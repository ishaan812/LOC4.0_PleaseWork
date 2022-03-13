import React, { useState } from 'react'
import './facebook.css'

const Facebook = () => {
    const [DropDownList,SetDropDownList]=useState("B2C");
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
    <h1 className='tips'> TIPS TO BOOST REACH <img className="lol" src={require('./stalkr.png')} /> </h1>
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
      <option value="B2C">B2C</option>
      <option value="B2B">B2B</option>
      <option value="Media">Media</option>
      <option value="Education">Education</option>
      <option value="Tech">Tech</option>
  
    </select>
    {
      DropDownList === "B2C" ? <p>The best times to post on Facebook for B2C businesses are between 9–10 am, 11 am–12 noon, and 4–5 pm. These times tend to coincide with workers' breaks (or nearing the end of their workday).</p> :
      (DropDownList ==="B2B" ? <p>The optimal time for these firms to post is around 9 am or 3–4 pm.</p> : 
      (DropDownList ==="Media" ? <p>The most successful Facebook posts tended to coincide with tv news bulletins – 7 am, 11 am, and 6 pm.
      </p> :
      (DropDownList ==="Education" ? <p>higher education brands seem to find their best reach comes before class, or in breaks between lessons. The peak times for higher education are at 8 am,  noon, and 3 pm.</p> :
      (DropDownList ==="Tech" ? <p>These businesses posted their most successful Facebook posts at 9 am, 3 pm, or 5 pm.</p>  : <p>""</p>))))
      
    }
    
    </div>
  )
}

export default Facebook