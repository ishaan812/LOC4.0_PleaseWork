import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import './signup.css';


const Form = () => {
  const [EmailID,SetEmailID]=useState('');
  const [Name,SetName]=useState('');
  const [Password,SetPassword]=useState('');
  const [ConfirmPassword,SetConfirmPassword]=useState('');

  const submit = (e) => {
    e.preventDefault();
    if(ConfirmPassword!==Password) {alert("Password is not the same as confirm password");};
    axios.post('http://localhost:5000/users/add', 
        {
          "name": Name,
          "emailid": EmailID,
          "password": Password
        });
  }

  return (
    <div className='signup'>
        
        <br></br>
        <table className='form'>
        <tr><td colSpan={2}><img id='image' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='logo'/></td></tr>
        <br></br>
        <br></br>
        <tr><td>NAME: </td>
            <td ><input type='text' value={Name} onChange={event=>SetName(event.target.value)} /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>EMAIL-ID: </td>
            <td><input type='email' value={EmailID} onChange={event=>SetEmailID(event.target.value)} /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>PASSWORD: </td>
            <td><input type='password' value={Password} onChange={event=>SetPassword(event.target.value)} /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>CONFIRM-PASSWORD: </td>
            <td><input type='password' value={ConfirmPassword} onChange={event=>SetConfirmPassword(event.target.value)} /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td colSpan={2}><button className='but' onClick={e=>submit(e)}> SIGN UP </button></td></tr>
        </table>
    
    </div>
  )
}

export default Form