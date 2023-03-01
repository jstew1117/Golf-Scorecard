import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./Login.css";

function LoginForm(props) {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  })
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
    user_name: "",
  })




  let _handleLogin = (event) => {
    event.preventDefault();
    console.log(login)

    fetch('https://marietta-scorecard.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(login)
    }).then(res => res.json()).then(serverResponse => {
      console.log(serverResponse)
      if(serverResponse.id!==undefined) {
        props.updateUserId(serverResponse.id)
      }else{
        alert(serverResponse.error)
      }
      
    })

  }

  let _handleSignIn = (event) => {
    event.preventDefault();
    console.log(signIn)

    fetch('https://marietta-scorecard.onrender.com/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signIn)
    }).then(res => res.json()).then(serverResponse => {
      console.log(serverResponse)
      if(serverResponse.id!==undefined) {
        props.updateUserId(serverResponse.id)
      }else{
        alert(serverResponse.error)
      }
      
    })

  }

  return (
    <div>
      <div class="login">
      <form onSubmit={_handleLogin} >
        
        <label>
          <p>Login:</p>
          <TextField id="outlined-basic" label="Email" variant="outlined"
            type="text"
            name='email'
            value={login.email}
            onChange={(event) => {
              setLogin({ ...login, email: event.target.value })
            }}
          />
        </label>
        <br></br>
        <br />
        <label>
          <TextField id="outlined-basic" label="Password" variant="outlined"
            type="password"
            name="password"
            value={login.password}
            onChange={(event) => {
              setLogin({ ...login, password: event.target.value })
            }}
          />
        </label>
        <br></br>
        <br />
        <Button type= "submit" variant="contained">Submit</Button>
        
      </form>
      </div>
    
    <div className="SignUp">
<form onSubmit={_handleSignIn}>
  <label>
    <p>Sign-up:</p>
    <TextField id="outlined-basic" label="Email" variant="outlined"
      type="text"
      name='email'
      value={signIn.email}
      onChange={(event) => {
        setSignIn({ ...signIn, email: event.target.value })
      }}
    />
  </label>
  <br/>
  <br />
  <label>
    <TextField id="outlined-basic" label="User-Name" variant="outlined"
      type="text"
      name="user_name"
      value={signIn.user_name}
      onChange={(event) => {
        setSignIn({ ...signIn, user_name: event.target.value })
      }}
    />
  </label>
  <br />
  <br/>
  <label>
    <TextField id="outlined-basic" label="Password" variant="outlined"
      type="password"
      name="password"
      value={signIn.password}
      onChange={(event) => {
        setSignIn({ ...signIn, password: event.target.value })
      }}
    />
  </label>
  <br></br>
  <br></br>
  <Button type= "submit" variant="contained">Submit</Button>
</form>
</div>
</div>
  )
}

export default LoginForm;



