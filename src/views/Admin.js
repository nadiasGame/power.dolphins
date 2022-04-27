import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addBook } from '../actions/bookActions';
import { addUser } from '../actions/userActions'

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        books = useSelector((state) => { return state.books}),
        dispatch = useDispatch(),
        navigate = useNavigate(),
        nameInput = useRef(null),
        emailInput = useRef(null),
        passwordInput = useRef(null),
        keycardNumberInput = useRef(null),
        cardPINInput = useRef(null),
        title = useRef(""),
        author = useRef(""),
        description = useRef(""),
        rating = useRef(""),
        quantity = useRef(""),
        price = useRef(""),
        [ newUser, setNewUser ] = useState();

  function checkLoggedIn(){
    if(loggedInUser === null){
      navigate('/home')
    }
  }

  function addBookHandler() {
    var book = {
      id: books.length + 1,
      title: title.current.value,
      author: author.current.value,
      description: description.current.value,
      rating: rating.current.value,
      quantity: quantity.current.value,
      price: price.current.value
    }

    dispatch(addBook(book));
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

  return(
    <section>
    <Header />
      <p>Admin</p>
        <div className='addBook'>
          <input className='addBookTitle' placeholder='Title' ref={title}></input>
          <input className='addBookAuthor' placeholder='Author' ref={author}></input>
          <input className='addBookDescription' placeholder='Description' ref={description}></input>

          <input className='addBookRating' placeholder='Rating' ref={rating}></input>
          <input className='addBookQuantity' placeholder='Quantity' ref={quantity}></input>
          <input className='addBookPrice' placeholder='Price' ref={price}></input>
          <button onClick={addBookHandler}>Add book</button>
        </div>

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
