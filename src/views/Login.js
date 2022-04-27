import { useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedInUser } from '../actions/userActions';

import Header from '../components/Header';
import './Login.css';


function Login(){
  const navigate = useNavigate();
  const emailInput = useRef(null),
        passwordInput = useRef(null);
  const users = useSelector((state) => { return state.users}),
        dispatch = useDispatch();




async function handleLogin(){
  if(emailInput.current.value === "" || passwordInput.current.value === ""){
    alert("fyll i fälten");
  }
  let user = users.find(user => user.email === emailInput.current.value && user.password === passwordInput.current.value)
  if(user){
    await dispatch(setLoggedInUser(user));
    if(user.admin == true){
      navigate('/admin');
    }else{
      navigate('/profile');
    }
  }else{
    alert("Login failed");
  }
}


  return(
    <section>
    <Header />
    <h2>login</h2>
    <form onSubmit={ handleLogin } id="loginForm">
      <input id="loginEmail" type="text" ref={ emailInput } placeholder="Email"/>
      <input id="loginPassword" type="password" ref={ passwordInput } placeholder="Password"/>
      <button id="loginBtn">login</button>
    </form>
    </section>
  )
}

export default Login;
