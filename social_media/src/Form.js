import React from 'react'

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