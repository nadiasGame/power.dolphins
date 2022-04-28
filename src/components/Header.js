import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedInUser } from '../actions/userActions'
import './Header.css';

function Header(){
  const navigate = useNavigate(),
        loggedIn = useSelector((state) => { return state.loggedInUser }),
        dispatch = useDispatch(),
        logoutBtn = useRef(null);
  let buttonText = "";

  function nav(event){
    navigate('/' + event.target.innerHTML);
  }
  function logout(){
    dispatch(setLoggedInUser(null));
    logoutBtn.current.style.display = 'none';
    navigate('/');
  }

  if(loggedIn === null){
    buttonText = "Inloggning";
  }else if(loggedIn.admin === true){
    buttonText = "Admin";
  }else if(loggedIn.admin === false){
    buttonText = "Profil";
  }

useEffect(() => {
    if(loggedIn != null){
      logoutBtn.current.style.display = 'block';
    }
  }, []);


  return(
    <section className="HeaderWrapper">
      <button onClick={ nav }>Hem</button>
      <button onClick={ nav }>{ buttonText }</button>
      <section ref={ logoutBtn } style={{display: "none"}}>
        <button onClick={ logout }  className="logoutButton">Logga ut</button>
      </section>
    </section>
  )
}

export default Header;
