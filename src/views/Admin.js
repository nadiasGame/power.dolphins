import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect} from 'react';

import AddAndEditBook from '../components/AddAndEditBook';
import AddUser from '../components/AddUser';
import EditUser from '../components/EditUser';
import Header from '../components/Header';
import './Admin.css';

function Admin(){
  const loggedInUser = useSelector((state) => { return state.loggedInUser}),
        navigate = useNavigate();

  function checkLoggedIn(){
    if(loggedInUser === null){
      navigate('/home')
    }
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
    </section>
  )
}

export default Admin;
