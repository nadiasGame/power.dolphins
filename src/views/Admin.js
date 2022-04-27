import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../actions/userActions'

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        nameInput = useRef(null),
        emailInput = useRef(null),
        passwordInput = useRef(null),
        keycardNumberInput = useRef(null),
        cardPINInput = useRef(null),
        [ newUser, setNewUser ] = useState();

  function checkLoggedin(){
    if(loggedInUser === null){
      navigate('/home')
    }
  }

  useEffect(() => {
    checkLoggedin();
  }, []);

  function handleOnChange(){
    const tempNewUser = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      password: passwordInput.current.value,
      admin: false,
      keycardNumber: keycardNumberInput.current.value,
      cardPIN: cardPINInput.current.value,
      borrowedBooks: [],
    };

    setNewUser(tempNewUser);
  }

  function addUserHandler(){
    console.log(newUser);
    dispatch(addUser(newUser));
  }

  return(
    <section>
    <Header />
      <p>Admin</p>

        <section className="addUserForm" >
          <label>Namn:
            <input ref={ nameInput } onChange={ handleOnChange } placeholder="name" />
          </label>
          <label>Email:
            <input ref={ emailInput } onChange={ handleOnChange } placeholder="email" />
          </label>
          <label>Lösenord:
            <input ref={ passwordInput } onChange={ handleOnChange } placeholder="Lösenord" />
          </label>
          <label>Kortnummer:
            <input ref={ keycardNumberInput } onChange={ handleOnChange } placeholder="Kortnummer" />
          </label>
          <label>Kort Pin:
            <input ref={ cardPINInput } onChange={ handleOnChange } placeholder="Kort Pin" />
          </label>
          <button onClick={ addUserHandler }>Lägg till andvändare</button>
        </section>


    </section>
  )
}

export default Admin;
