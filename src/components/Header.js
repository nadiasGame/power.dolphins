import './Header.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'

function Header(){
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => { return state.loggedInUser });
  let buttonText = "";

  function nav(event){
    navigate('/' + event.target.innerHTML);
  }

    if(loggedIn === null){
      buttonText = "Login";
    }else if(loggedIn.admin == true){
      buttonText = "Admin";
    }else if(loggedIn.admin == false){
      buttonText = "Profile"
    }


  return(
    <section className="HeaderWrapper">
      <button onClick={nav}>Home</button>
      <button onClick={nav}>{ buttonText }</button>
    </section>
  )
}

export default Header;
