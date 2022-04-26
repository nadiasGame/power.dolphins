import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser});
  const navigate = useNavigate();

  function cheackLoggin(){
    if(loggedInUser === null){
      navigate('/home')
    }
  }

  useEffect(() => {
    cheackLoggin();
  }, []);

  return(
    <section>
    <Header />
      <p>Admin</p>
    </section>
  )
}

export default Admin;
