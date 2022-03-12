import React from 'react';
import './signup.css'


const Form = () => {
  return (
    <div className='signup'>
        
        <br></br>
        <table className='form'>
        <tr><td colSpan={2}><img id='image' src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='logo'/></td></tr>
        <br></br>
        <br></br>
        <tr><td>NAME: </td>
            <td ><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>EMAIL-ID: </td>
            <td><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>PASSWORD: </td>
            <td><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td>CONFIRM-PASSWORD: </td>
            <td><input type='text' /></td>
            </tr>
            <br></br>
            <br></br>
            <tr><td colSpan={2}><button className='but'> SIGN UP </button></td></tr>
        </table>
    
    </div>
  )
}

export default Form