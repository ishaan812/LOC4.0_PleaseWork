import Signup from './components/signuppage/signup.jsx';
import Landing from './components/landing/landing.jsx';
import Signin from './components/signin/signin.jsx';


import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/signin" exact element={<Signin/>} />
          <Route path="/" exact element={<Landing/>} /> 
        </Routes>
      </Router>
    </div>

  );
}

export default App