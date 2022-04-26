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
    navigate('/Home');
  }

  if(loggedIn === null){
    buttonText = "Login";
  }else if(loggedIn.admin == true){
    buttonText = "Admin";
  }else if(loggedIn.admin == false){
    buttonText = "Profile"
  }

useEffect(() => {
    if(loggedIn != null){
      logoutBtn.current.style.display = 'block';
    }
  }, []);


  return(
    <section className="HeaderWrapper">
      <button onClick={ nav }>Home</button>
      <button onClick={ nav }>{ buttonText }</button>
      <section ref={ logoutBtn } style={{display: "none"}}>
      <button onClick={ logout }  className="logoutButton">Logout</button>
      </section>
    </section>
  )
}

export default Header;
