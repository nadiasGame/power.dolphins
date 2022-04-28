import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import AddAndEditBook from '../components/AddAndEditBook';
import AddUser from '../components/AddUser';
import EditUser from '../components/EditUser';
import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        navigate = useNavigate(),
        dispatch = useDispatch(),
        keyCardNumberInput = useRef(""),
        cardPINInput = useRef(""),
        bookIdInput = useRef("");

  function checkLoggedIn(){
    if(loggedInUser === null){
      navigate('/home')
    }
  }

  function borrowAndReturn(){
    console.log("Borrow and return");
    dispatch({type: "BORROW_RETURN_BOOK", payload: {keycardNumber: keyCardNumberInput.current.value, cardPIN: cardPINInput.current.value, bookId: bookIdInput.current.value}});
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return(
    <section>
    <Header />
      <p>Admin</p>
      <div className='addDiv'>
        <AddAndEditBook />
        <AddUser />
      </div>
      <div>
        <EditUser />
      </div>
      <div>
        <input type="text" placeholder="Boken's id" ref={bookIdInput} />
        <input type="text" placeholder="Användarens keycard nummer" ref={keyCardNumberInput} />
        <input type="text" placeholder="Användarens PIN" ref={cardPINInput} />
        <button onClick={borrowAndReturn}>Låna/Lämna tillbaka</button>
      </div>
    </section>
  )
}

export default Admin;
