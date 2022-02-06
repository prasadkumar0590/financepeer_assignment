import React from 'react';
import { useState } from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
function Login(props){
    
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("")

    async function login(){
        debugger
        const url = process.env.REACT_APP_API_URL + "api/token/"
        try {
            const resp = await axios.post(url, {username: userName, password: password});
            if(resp.status == 200){
                sessionStorage.setItem('token',resp.data['access']);
                props.history.push("/dashboard");
            }
            else{
                setError('Invalid Credentials!')
            }
        } catch (error) {
            setError('Invalid Credentials!')
        }

    }
    return(
        <div className="App">
        <header className="App-header">
          <div className="Login">
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={(evt) =>setUserName(evt.target.value)}
              value={userName}
            />
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={(evt) =>setPassword(evt.target.value)}
              value={password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={login}
              >
                Log In
              </Button>
            </div>
          </div>
          </header>
      </div>
    )
}

export default Login;