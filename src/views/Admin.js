import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addUser, editUser } from '../actions/userActions'

import AddAndEditBook from '../components/AddAndEditBook';

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        users = useSelector((state) => { return state.users}),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        nameInput = useRef(null),
        emailInput = useRef(null),
        passwordInput = useRef(null),
        keycardNumberInput = useRef(null),
        cardPINInput = useRef(null),
        [ newUser, setNewUser ] = useState(),
        [ editUserState, setEditUserState ] = useState({
              name: "",
              email: "",
              password: "",
              admin: false,
              keycardNumber: "",
              cardPIN: "",
              borrowedBooks: [],
        });

  function checkLoggedIn(){
    if(loggedInUser === null){
      navigate('/home')
    }
  }

  useEffect(() => {
    checkLoggedIn();
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

  function searchUser(event){
    const foundUser = users.filter((user) => {
      if(event.target.value === user.email){
        return user;
      }
    })
    console.log(foundUser);
  }

  function editUserHandler(event){
    setEditUserState({...editUserState, [event.target.id]:event.target.value});
    console.log(editUserState)
  }

  function editUserButton(){
    dispatch(editUser(editUserState));
    console.log(editUserState);
  };


  return(
    <section>
    <Header />
      <p>Admin</p>
      <div className='addDiv'>

        <AddAndEditBook />

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

      </div>

      <div className="editUserDiv">
        <p>Sök efter andvändares Email</p>
        <label>Email:
          <input placeholder="email" onChange={ searchUser }/>
        </label>

        <p>Skriv in den nya informationen</p>
        <label>Namn:
          <input id="name" onChange={ editUserHandler } placeholder="name" />
        </label>
        <label>Email:
          <input id="email" onChange={ editUserHandler } placeholder="email" />
        </label>
        <label>Lösenord:
          <input id="password" onChange={ editUserHandler } placeholder="Lösenord" />
        </label>
        <label>Kortnummer:
          <input id="keycardNumber" onChange={ editUserHandler } placeholder="Kortnummer" />
        </label>
        <label>Kort Pin:
          <input id="cardPIN" onChange={ editUserHandler } placeholder="Kort Pin" />
        </label>
        <button onClick={ editUserButton }>uppdatera info</button>
      </div>
    </section>
  )
}

export default Admin;
