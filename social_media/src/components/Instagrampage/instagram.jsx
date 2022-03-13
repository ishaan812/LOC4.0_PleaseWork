import React, { useState } from 'react'
import './instagram.css'

const Instagram = () => {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
      
      const list1 = ["Retail", "Food and Beverage", "Business, Travel and Tourism", "Healthcare", "Education", "Tech Media and Entertainment"];
     
      const [DropDownList,SetDropDownList]=useState("Retail");

     
     
     
     
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
    <h1 className='tips'> TIPS TO BOOST REACH <img className="lol" src={require('./stalkr.png')}></img></h1>
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
      DropDownList === "Retail" ? <p><b>Best time to post on Instagram:</b> Wednesday afternoon (3 pm) & Friday midday (11 am – 12 pm)<br />
      Ultimate Best Day: Wednesday<br />
      Worst Day: Sunday – Makes sense as most people are being present in real life on the weekends. <br />
      Lowest Engagement: Late Night & Early Mornings – Most people sleep during these hours and are not active on social media<br />
      </p> :
      (DropDownList ==="Food and Beverage" ? <p><b>Best time to post on Instagram:</b> Wednesday, Thursday, Friday, Saturday- 
      Best Hours: Noon- Most people check their phones around lunch time-
      Most Engaging Day: Friday kicks off the weekend and plans for reservations spike
      Worst Days for Engagement: Saturday & Sundays</p> : 
      (DropDownList ==="Healthcare" ? <p><b>Best time to post on Instagram:</b> Fridays, Tuesdays, and Wednesdays
      Most Engaging: Between 11am & 1pm, and between 9am and 10am.</p> :
      (DropDownList ==="Education" ? <p><b>Best time to post on Instagram:</b> Tuesday at 8 am 
      Most Consistent Engagement: Weekdays from 9 am to 3 pm 
      Worst Days for Engagement: Saturday & Sundays have minimal engagement in most industries</p> :
      (DropDownList ==="Travel and Tourism" ? <p><b>Best time to post on Instagram:</b> Friday mornings at 10 am 
      Most Consistent Engagement: Wednesday through Saturday (10 am – 8 pm)
      Highest Engagement: Wednesday & Friday mid morning and Saturday nights (6 pm – 8 pm)
      Worst Days for Engagement: Sunday due to the lack of activity on Instagram on this day.</p> :
      (DropDownList ==="Tech Media and Entertainment" ? <p><b>Best time to post on Instagram:</b> Wednesday morning at 6 am or 9 am
      Best time to post on Instagram: Wednesday mid-morning from 10-11 am, Friday morning from 7-10 am and Saturday morning from 7-11 am. 
      Worst Day: Sunday-Most people do not check social as often on the weekends in this industry.<b>Best time to post on Instagram:</b> Friday morning (9 am)
Best Engagement: Wednesday, Thursday and Friday during work hours (8-5 pm)
Lowest Engagement: Saturday and Sunday – Most people have these days off from work, are more present in real life activities and therefore not as active on social media</p>: <p>" "</p>)))))
    }
    
    
    </div>

    
  )}

export default Instagram