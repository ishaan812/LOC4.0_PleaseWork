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
        });
    
    
  }
  
  
  return (
    <div className='signin'>
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
            <td><input className='inputt' type='text' /></td>
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