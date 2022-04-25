import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header(){
  const navigate = useNavigate();

  function nav(event){
    navigate('/' + event.target.innerHTML);
  }

  return(
    <section className="HeaderWrapper">
      <button onClick={nav}>Home</button>
      <button onClick={nav}>Login</button>
    </section>
  )
}

export default Header;
