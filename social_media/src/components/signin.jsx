import React from 'react'
import './signin.css'

const signin = () => {
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
            <tr><td colSpan={2}><button className='but'> SIGN IN </button></td></tr>
        </table>
    </div>
  )
}

export default signin