import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'

import Header from '../components/Header';
import './Profile.css';

function Profile(){
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
      <p>Profile</p>
    </section>
  )
}

export default Profile;
