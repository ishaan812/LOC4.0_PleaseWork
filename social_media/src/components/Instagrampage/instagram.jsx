import React, { useState } from 'react'
import './instagram.css'

const Instagram = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
     
      const [DropDownList,SetDropDownList]=useState(0);

     
     
     
     
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
    <ul> <li>Monday: 6 am, 10 am, and 10 pm EST</li>
    <li>Tuesday: 2 am, 4 am, and  9 am EST</li>
    <li>Wednesday: 7 am, 8 am and 11 pm EST</li>
    <li>Thursday: 9 am, 12 pm, and 7 pm EST</li>
    <li>Friday: 5 am, 1 pm, and 3 pm EST</li>
    <li>Saturday: 11 am, 7 pm, and 8 pm EST</li>
    <li>Sunday: 7am, 8am, and 4pm EST </li></ul>
    </p>
    <br></br>
    <div className="dropdown">
  <button onclick="myFunction()" className="dropbtn">Dropdown</button>
  <div id="myDropdown" className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
<br></br><br></br>
    <img src={require('./post-time.jpeg')} alt="time" />
    </div>
  )
}

export default Instagram