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
    <div className='headerSearchHolder'>
        <Header />
        <div className='searchHolder'>
          <input type="text" placeholder="Search" ref={searchField} onChange={event => setQuery(event.target.value)} />
          <p>🔎</p>
        </div>
      </div>
      <h1>Välkommen till Enuiterna's Bibliotek</h1>
      <h3>Här är veckans mest populära böcker:</h3>
      <section className="BooksWrapper">
      { bookComponent }
      </section>
    </section>
  )

}

export default Home;
