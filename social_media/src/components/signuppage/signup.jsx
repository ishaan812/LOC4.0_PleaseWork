import axios from 'axios';
import React,{ useState, useEffect } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';


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
        <Link to="/"><button className='backk'>GO BACK</button></Link>
    
    </div>
  )
}

export default Form

// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class SignUpForm extends Component {
//   constructor() {
//     super();

//     this.state = {
//       email: "",
//       password: "",
//       name: "",
//       hasAgreed: false
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     let target = event.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();

//     console.log("The form was submitted with the following data:");
//     console.log(this.state);
//   }

//   render() {
//     return (
//       <div className="formCenter">
//         <form onSubmit={this.handleSubmit} className="formFields">
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="name">
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="formFieldInput"
//               placeholder="Enter your full name"
//               name="name"
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="formFieldInput"
//               placeholder="Enter your password"
//               name="password"
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="formField">
//             <label className="formFieldLabel" htmlFor="email">
//               E-Mail Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="formFieldInput"
//               placeholder="Enter your email"
//               name="email"
//               value={this.state.email}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className="formField">
//             <label className="formFieldCheckboxLabel">
//               <input
//                 className="formFieldCheckbox"
//                 type="checkbox"
//                 name="hasAgreed"
//                 value={this.state.hasAgreed}
//                 onChange={this.handleChange}
//               />{" "}
//               I agree all statements in{" "}
//               <a href="null" className="formFieldTermsLink">
//                 terms of service
//               </a>
//             </label>
//           </div>

//           <div className="formField">
//             <button className="formFieldButton">Sign Up</button>{" "}
//             <Link to="/sign-in" className="formFieldLink">
//               I'm already member
//             </Link>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default SignUpForm;
