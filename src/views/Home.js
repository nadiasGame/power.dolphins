import './Home.css';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import Book from '../components/book'

function Home(){
  const booksItem = useSelector((state) => { return state.books})

 const bookComponent = booksItem.map((bookItem, index) => {
   return <Book book={ bookItem } key={ index } />
 });


  return(
    <section>
    <Header />
      <p>Home</p>
      <section className="BooksWrapper">
      { bookComponent }
      </section>
    </section>
  )

}

export default Home;
