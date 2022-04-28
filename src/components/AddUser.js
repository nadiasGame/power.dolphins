import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { addUser } from '../actions/userActions'

function AddUser(){
  const   dispatch = useDispatch(),
          nameInput = useRef(null),
          emailInput = useRef(null),
          passwordInput = useRef(null),
          keycardNumberInput = useRef(null),
          cardPINInput = useRef(null),
          [ newUser, setNewUser ] = useState();


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


  return (
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
  )
}

export default AddUser;
