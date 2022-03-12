import Signup from './components/signuppage/signup.jsx';
import Landing from './components/landing/landing.jsx';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/signup" exact element={<Signup/>} />
          <Route path="/" exact element={<Landing/>} />
        </Routes>
      </Router>
    </div>

  );
}

export default App