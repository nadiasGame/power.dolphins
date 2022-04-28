import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editUser } from '../actions/userActions'

function EditUser(){
  const users = useSelector((state) => { return state.users}),
        dispatch = useDispatch(),
        [ editUserState, setEditUserState ] = useState({
              name: "",
              email: "",
              password: "",
              admin: false,
              keycardNumber: "",
              cardPIN: "",
              borrowedBooks: [],
        });

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


  return (
    <section  className="editUserDiv">
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
    </section>
  )
}

export default EditUser;
