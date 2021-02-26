import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const credentials = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [form, setForm] = useState(credentials);
  const history = useHistory();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const login = (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/login', form)
      .then(res=>{
        localStorage.setItem('token', res.data.payload);
        history.push('/protected');
      })
      .catch(err=>{
        console.log(err);
      });
  };

  // useEffect(() => {  
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // })

  return (
      <div className="login">
          <form onSubmit={login} className="form">
              <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  placeholder="Username"
              />
              <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
              />
              <button type="submit">LOG IN</button>
          </form>
      </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.