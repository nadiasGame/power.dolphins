import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { addBook, editBook } from '../actions/bookActions';
import { addUser, editUser } from '../actions/userActions'

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        books = useSelector((state) => { return state.books}),
        users = useSelector((state) => { return state.users}),
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
        image = useRef(""),
        searchForBook = useRef(""),
        [ newUser, setNewUser ] = useState(),
        [ editingBook, setEditingBook ] = useState(false),
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

  function getAndInputBook(){
    var book = books.find(book => book.id === Number(searchForBook.current.value));
    if(book){
      title.current.value = book.title;
      author.current.value = book.author;
      description.current.value = book.description;
      rating.current.value = book.rating;
      quantity.current.value = book.quantity;
      price.current.value = book.price;
      image.current.value = book.imageLink;
    }
    setEditingBook(true);
  }

  function addBookHandler() {
    var book = {
      title: title.current.value,
      author: author.current.value,
      description: description.current.value,
      rating: rating.current.value,
      quantity: quantity.current.value,
      price: price.current.value,
      imageLink: image.current.value
    }

    if(editingBook){
      book.id = Number(searchForBook.current.value);
      dispatch(editBook(book));
      alert("Boken är redigerad!");
      setEditingBook(false);
    } else {
      book.id = books.length + 1;
      dispatch(addBook(book));
      alert("Boken är tillagd!");
    }
    title.current.value = ""; author.current.value = ""; description.current.value = ""; rating.current.value = ""; quantity.current.value = ""; price.current.value = ""; image.current.value = "";
  }

  function cancelEditingBook(){
    setEditingBook(false);
    title.current.value = ""; author.current.value = ""; description.current.value = ""; rating.current.value = ""; quantity.current.value = ""; price.current.value = ""; image.current.value = "";
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

        <div className='addBook'>
          <input className='searchForBook' type='text' placeholder='Search for a book by id' ref={searchForBook} />
          <button onClick={getAndInputBook}>Search</button>
          {editingBook ? <p>Editing book</p> : <p>Adding book</p>}

          <input className='addBookTitle' placeholder='Title' ref={title}></input>
          <input className='addBookAuthor' placeholder='Author' ref={author}></input>
          <input className='addBookDescription' placeholder='Description' ref={description}></input>
          <input className='addBookRating' placeholder='Rating' ref={rating}></input>
          <input className='addBookQuantity' placeholder='Quantity' ref={quantity}></input>
          <input className='addBookPrice' placeholder='Price' ref={price}></input>

          <input className="addBookImage" placeholder="Image Link" ref={image}></input>
          <button onClick={addBookHandler}>{editingBook ? "Edit" : "Add"} book</button>

          {editingBook ? <button onClick={cancelEditingBook}>Cancel</button> : null}
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
