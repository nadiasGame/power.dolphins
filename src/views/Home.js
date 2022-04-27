import './Home.css';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Book from '../components/book'
import { useRef, useState } from 'react';
import Picture1 from '../Assets/05a4cac6953fed0c2c835324f3fdf92d.jpeg'
import Picture2 from '../Assets/black_button_books_-_big_book_of_faces_thumb.jpeg'
import Picture3 from '../Assets/nedladdning.jpeg'
import Picture4 from '../Assets/images.jpeg'
import Picture5 from '../Assets/integrado-book-donation-forgotten-books-print-371572-adeevee.jpeg'
import Picture6 from '../Assets/book.jpeg'
import Picture7 from '../Assets/find-your-book-social-media-post-mockup-bookcrossing-bookshop-advertising-web-banner-design-template-social-media-booster-content-layout-promotion-poster-print-ads-with-flat-illustrations-700-179342860.jpeg'
import Picture8 from '../Assets/9781801270632_200x_dropshipping-facebook-advertising-2-books-in-1.jpeg'
import Picture9 from '../Assets/images (1).jpeg'
import Picture10 from '../Assets/book-ads.jpeg'

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
      <img src={Picture4} alt="books" />
      <img src={Picture5} alt="books" />
      <img src={Picture6} alt="books" />
      <img src={Picture7} alt="books" />
      <img src={Picture8} alt="books" />
      <img src={Picture9} alt="books" />
      <img src={Picture10} alt="books" />
 
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




