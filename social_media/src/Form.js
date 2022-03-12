import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

const Form = () => {
  return (
    <div className='signup'>
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
            <PersonIcon />
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