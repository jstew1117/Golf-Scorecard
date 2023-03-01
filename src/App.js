
import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import Scorecard from './components/Scorecard';
import Submit from './components/Submit';
import LoginForm from './components/LoginForm';
import Button from '@mui/material/Button';

import backgroundImage from './components/scorecardlogo.jpg';


import {

  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';

function App() {

  const [submitScore, updateSubmitScore] = useState(0)
  const [userId, updateUserId] = useState(null)
  const navigate = useNavigate()

  function handleLogOut() {
    updateUserId(null)
  }

  function printScore(score) {
    updateSubmitScore(score)

    fetch(`http://localhost:3001/user/${userId}/score`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        score: score

      })
    }).then(res => res.json()).then(data => {
      console.log(data);
      navigate("/Submit")
    })
  }




  let homeScreen = ""
  if (userId !== null) {
    homeScreen = (<div><div>
      <Link to='/'>Home</Link>
            <br />
            <br />
            <Link to='/Scorecard'>Scorecard</Link>
            <br />
            <br />
      <nav>

        <div >
          <Button type="submit" variant="contained" classname="LogOut" onClick={handleLogOut}>Log Out</Button>
        </div>
      </nav>
    </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scorecard" element={<Scorecard printScore={printScore} />} />
        <Route path="/Submit" element={<Submit score={submitScore} userId={userId} />} />
      </Routes>
    </div>)
  } else {
    homeScreen = (
      <div className="container">
        <LoginForm updateUserId={updateUserId} />


      </div>)
  }

  return (
    <div>
      <div className="App">
        <header class="header" className="App-Header">
          <div><h1>Marietta Country Club</h1>   
           </div>

          

        </header>
        {homeScreen}
      </div>

    </div>





  )
    ;

}
export default App;
