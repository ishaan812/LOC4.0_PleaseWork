import axios from 'axios';
import React,{ useState, useEffect} from 'react';

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
        <tr><td>EMAIL-ID: </td>
            <td ><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>PASSWORD: </td>
            <td><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td colSpan={2}><button className='but' onClick={e=>submit(e)}> SIGN IN </button></td></tr>
        </table>
    </div>
  )
}

export default Signin