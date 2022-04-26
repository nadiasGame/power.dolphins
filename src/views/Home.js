import './Home.css';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Book from '../components/book'
import { useRef, useState } from 'react';

function Home(){
  const booksItem = useSelector((state) => { return state.books})
  const [query, setQuery] = useState("")
  const searchField = useRef("")

  let filteredBooks = booksItem.filter(book => {
    if (query === "") {
      //if query is empty
      return book;
    } else if (book.title.toLowerCase().includes(query.toLowerCase())) {
      //returns filtered array
      return book;
    }
    else {
      return null;
    }
  });

  const bookComponent = filteredBooks.map((bookItem, index) => {
    return <Book book={ bookItem } key={ index } />
  });

  return(
    <section>
    <Header />
      <p>Home</p>
      <input type="text" placeholder="Search" ref={searchField} onChange={event => setQuery(event.target.value)} />
      <section className="BooksWrapper">
      { bookComponent }
      </section>
    </section>
  )

}

export default Home;
