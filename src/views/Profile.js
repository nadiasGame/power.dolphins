import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

import Header from '../components/Header';
import './Profile.css';

function Profile(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser }),
        books = useSelector((state) => { return state.books }),
        navigate = useNavigate();

  function checkLogin(){
    if(loggedInUser === null){
      navigate('/')
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);


  const borrowedBooksList = books.filter((book) => {
  for(let i = 0; i < loggedInUser.borrowedBooks.length; i++){
    if(loggedInUser.borrowedBooks[i].bookId === book.id){
      return book;
    }
  }
  });
  
  const bookComponent = borrowedBooksList.map((bookItem, index) => {
    return  <li key={index}>
              <p>{bookItem.title}</p>
              <p>{bookItem.author}</p>
              <p>{loggedInUser.borrowedBooks[index].dueDate.split("T")[0] }</p>
            </li>
  });

  return(
    <div>
    <Header />
      <p>Hej { loggedInUser ? loggedInUser.name : "" }!</p>

      <section className="borrowedBooksSection" >
        <p>Dina lånade böcker</p>
        <ul>
          { bookComponent }
        </ul>
      </section>
    </div>
  )
}

export default Profile;
