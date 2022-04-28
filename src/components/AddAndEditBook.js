import { useRef, useState } from 'react';
import { addBook, editBook } from '../actions/bookActions';
import { useSelector, useDispatch } from 'react-redux';

export default function AddAndEditBook() {
  const books = useSelector((state) => { return state.books}),
        dispatch = useDispatch(),
        title = useRef(""),
        author = useRef(""),
        description = useRef(""),
        rating = useRef(""),
        quantity = useRef(""),
        price = useRef(""),
        image = useRef(""),
        searchForBook = useRef(""),
        [ editingBook, setEditingBook ] = useState(false);

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

  return (
    <div className='addBook'>
      <input className='searchForBook' type='text' placeholder='Sök efter bok med id' ref={searchForBook} />
      <button onClick={getAndInputBook}>Sök</button>
      {editingBook ? <p>Redigerar bok</p> : <p>Lägger till bok</p>}

      <input className='addBookTitle' placeholder='Titel' ref={title}></input>
      <input className='addBookAuthor' placeholder='Författare' ref={author}></input>
      <input className='addBookDescription' placeholder='Beskrivning' ref={description}></input>
      <input className='addBookRating' placeholder='Betyg' ref={rating}></input>
      <input className='addBookQuantity' placeholder='Mängd' ref={quantity}></input>
      <input className='addBookPrice' placeholder='Pris' ref={price}></input>

      <input className="addBookImage" placeholder="Bild länk" ref={image}></input>
      <button onClick={addBookHandler}>{editingBook ? "Redigera" : "Lägg till"} bok</button>

      {editingBook ? <button onClick={cancelEditingBook}>Avbryt</button> : null}
    </div>
  )
}