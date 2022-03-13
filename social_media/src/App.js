import Signup from './components/signuppage/signup.jsx';
import Landing from './components/landing/landing.jsx';
import Signin from './components/signin/signin.jsx';
import Lobby from './components/lobby/lobby.jsx'
import Instagram from './components/Instagrampage/instagram.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/lobby" exact element={<Lobby />} />
          <Route path="/signin" exact element={<Signin/>} />
          <Route path="/instagram" exact element={<Instagram />} />
          <Route path="/" exact element={<Landing/>} /> 
        </Routes>
      </Router>
    </div>

  );
}

export default App