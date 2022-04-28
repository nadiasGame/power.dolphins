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
    return;
  }
  let user = users.find(user => user.email === emailInput.current.value && user.password === passwordInput.current.value)
  if(user){
    await dispatch(setLoggedInUser(user));
    if(user.admin == true){
      navigate('/admin');
    }else{
      navigate('/profil');
    }
  }else{
    alert("Login funkade inte!");
  }
}


  return(
    <section>
    <Header />
    <h2>Inloggning</h2>
    <form onSubmit={ handleLogin } id="loginForm">
      <input id="loginEmail" type="text" ref={ emailInput } placeholder="Email" autoFocus />
      <input id="loginPassword" type="password" ref={ passwordInput } placeholder="Lösenord"/>
      <button id="loginBtn">Logga in</button>
    </form>
    </section>
  )
}

export default Login;
