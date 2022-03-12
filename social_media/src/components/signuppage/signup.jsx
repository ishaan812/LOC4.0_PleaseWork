import React from 'react';


const Form = () => {
  return (
    <div className='signup'>
        <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='logo'/>
        <br></br>
        <form className='form'>
            <label>NAME: </label>
            <input type='text'/>
            
            <br></br>
            <br></br>
            <label>EMAIL-ID: </label>
            <input type='text' />
            <br></br>
            <br></br>
            <label>PASSWORD: </label>
            <input type='text' />
            <br></br>
            <br></br>
            <label>CONFIRM PASSWORD: </label>
            <input type='text' />
            <br></br>
            <br></br>
            <button className='but'> SIGN UP </button>
        </form>
    
    </div>
  )
}

export default Form