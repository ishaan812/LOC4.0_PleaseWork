import React, { useState } from 'react'
import './instagram.css'

const Instagram = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      const list1 = ["Retail", "Food and Beverage", "Business, Travel and Tourism", "Healthcare", "Education", "Tech Media and Entertainment"];
     
      const [DropDownList,SetDropDownList]=useState("");

     
     
     
     
      window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }



    
  return (
      <div className="container">
      
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
    <ul> <li>Monday: 6 am, 10 am, and 10 pm EST</li>
    <li>Tuesday: 2 am, 4 am, and  9 am EST</li>
    <li>Wednesday: 7 am, 8 am and 11 pm EST</li>
    <li>Thursday: 9 am, 12 pm, and 7 pm EST</li>
    <li>Friday: 5 am, 1 pm, and 3 pm EST</li>
    <li>Saturday: 11 am, 7 pm, and 8 pm EST</li>
    <li>Sunday: 7am, 8am, and 4pm EST </li></ul>
    </p>
    <br></br>
    
    <img src={require('./post-time.jpeg')} alt="time" />
    
  <br/>
  <select className='dropdown' value={DropDownList} onChange={event=>{SetDropDownList(event.target.value);console.log(event.target.value)}}>
      <option value="Retail">Retail</option>
      <option value="Food and Beverage">Food and Beverage</option>
      <option value="Healthcare">Healthcare</option>
      <option value="Education">Education</option>
      <option value="Travel and Tourism">Travel and Tourism</option>
      <option value="Tech Media and Entertainment">Tech Media and Entertainment</option>
    </select>
    {
      DropDownList === "Retail" ? <p>Hello World!</p> :
      (DropDownList ==="Food and Beverage" ? <p>Hello World 1</p> : 
      (DropDownList ==="Healthcare" ? <p>Hello World 1</p> :
      (DropDownList ==="Education" ? <p>Hello World 1</p> :
      (DropDownList ==="Travel and Tourism" ? <p>Hello World 1</p> :
      (DropDownList ==="Tech Media and Entertainment" ? <p>Hello World 1</p>: <p>" "</p>)))))
    }
    
    
    </div>

    
  )}

export default Instagram