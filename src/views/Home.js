import './Home.css';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Book from '../components/book'
import { useRef, useState } from 'react';
import Picture1 from '../Assets/05a4cac6953fed0c2c835324f3fdf92d.jpeg'
import Picture2 from '../Assets/black_button_books_-_big_book_of_faces_thumb.jpeg'
import Picture3 from '../Assets/nedladdning.jpeg'
import Picture4 from '../Assets/images.jpeg'
import RickAstley from '../Assets/X2Download.com-Rick Astley - Never Gonna Give You Up (Official Music Video).mp4'
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
    <div className='headerSearchHolder'>
        <Header />
        <div className='searchHolder'>
          <input type="text" placeholder="Sök" ref={searchField} onChange={event => setQuery(event.target.value)} />
          <p>🔎</p>
        </div>
      </div>
      <h1>Välkommen till Enuiterna's Bibliotek</h1>
      <h3>Här är veckans mest populära böcker:</h3>
      <div id="container">
        <div className="photobanner">
          <img className="first" src={Picture1} alt="books" />
          <img src={Picture2} alt="books" />
          <img src={Picture3} alt="books" />
          <img src={Picture4} alt="books" />
          <div>
            <h2 style={{animation: "blink 1s infinite"}}>Varning varning!</h2>
            <p>Har du lånat några böcker på sistone?</p>
            <marquee>TRODDE INTE DET VA</marquee>
            <p>Åk till ditt närmaste bibliotek idag och fixa det då...!</p>
            <marquee direction="up">Kan du läsa detta????</marquee>
          </div>
          <img src={Picture6} alt="books" />
          <video className="rickAstley" controls autoPlay muted loop>
            <source src={RickAstley} type="video/mp4" />
            Your browser does not support the video tag or format.
          </video>
          <img src={Picture8} alt="books" />
          <img src={Picture9} alt="books" />
          <img src={Picture10} alt="books" />
        </div>
    </div>
      <section className="BooksWrapper">
      { bookComponent }
      </section>
    </section>
  )
  

}

export default Home;




