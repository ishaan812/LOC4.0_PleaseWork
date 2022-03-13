import axios from 'axios';
import React,{ useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import './signin.css'

const Signin = () => {
  const [EmailID,SetEmailID]=useState('');
  const [Password,SetPassword]=useState('');

 

  const submit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/users/login', 
        {
          "emailid": EmailID,
          "password": Password
        }.then(window.location.replace("http://localhost:3000/lobby"))
    
    
    )}
  
  
  return (
    <div className='signin'>
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
        <br></br>
        <table className='form'>
        <tr><td colSpan={2}><img id='image' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='logo'/></td></tr>
        <br></br>
        <br></br>
        <tr><td>Email-id </td>
            <td ><input className='inputt' type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>Password </td>
            <td><input className='inputt' type='password' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td colSpan={2}><button className='but' onClick={e=>submit(e)}> SIGN IN </button></td></tr>
        </table>
        <Link to="/"><button className='back'>GO BACK</button></Link>
    </div>
  )
}

export default Signin