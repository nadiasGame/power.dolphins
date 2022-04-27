import './Home.css';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Book from '../components/book'
import { useRef, useState } from 'react';
import Picture1 from '../Assets/05a4cac6953fed0c2c835324f3fdf92d.jpeg'
import Picture2 from '../Assets/black_button_books_-_big_book_of_faces_thumb.jpeg'
import Picture3 from '../Assets/nedladdning.jpeg'
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
    <div id="container">
   
  
    <div className="photobanner">
    
    	<img className="first" src={Picture1} alt="books" />
    	<img src={Picture2} alt="books" />
    	<img src={Picture3} alt="books" />
 
    </div>
</div>

      <p>Home</p>
    
    <input type="text" placeholder="Search" ref={searchField} onChange={event => setQuery(event.target.value)} />
      <section className="BooksWrapper">
      { bookComponent }
      </section>
    </section>
  )
  

}

export default Home;




