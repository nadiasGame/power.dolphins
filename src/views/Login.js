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




async function handleLoggin(){
  if(emailInput.current.value === "" || passwordInput.current.value === ""){
    alert("fyll i fälten");
  }
  let user = users.find(user => user.email === emailInput.current.value && user.password === passwordInput.current.value)
  if(user){
    await dispatch(setLoggedInUser(user));
    navigate('/admin');
  }else{
    alert("Login failed");
}
}


  return(
    <section>
    <Header />
    <p>login</p>
    <section>
      <input type="text" ref={ emailInput }  placeholder="Email"/>
      <input type="text" ref={ passwordInput } placeholder="Password"/>
      <button onClick={ handleLoggin }>loggin</button>
    </section>
    </section>
  )
}

export default Login;
