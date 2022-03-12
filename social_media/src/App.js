import Signup from './components/signuppage/signup.jsx';
import Landing from './components/landing/landing.jsx';
import FormPage from './components/signin.jsx';


import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/signin" exact element={<FormPage/>} />
          <Route path="/" exact element={<Landing/>} /> 
        </Routes>
      </Router>
    </div>

  );
}

export default App