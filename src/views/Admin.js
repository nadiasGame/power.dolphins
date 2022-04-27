import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react'

import { addBook } from '../actions/bookActions';

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser});
  const books = useSelector((state) => { return state.books});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const title = useRef("")
  const author = useRef("")
  const description = useRef("")
  const rating = useRef("")
  const quantity = useRef("")
  const price = useRef("")

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
    </section>
  )
}

export default Admin;
