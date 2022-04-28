import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

import Header from '../components/Header';
import './Profile.css';

function Profile(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser});
  const navigate = useNavigate();

  function checkLogin(){
    if(loggedInUser === null){
      navigate('/')
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return(
    <section>
    <Header />
      <p>Hej { loggedInUser.name }!</p>
    </section>
  )
}

export default Profile;
