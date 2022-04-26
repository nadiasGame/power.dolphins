import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Admin from './views/Admin';
import Profile from './views/Profile';

function App() {
  return (
        <div className="App">
         <Routes>

          <Route path='/*' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
          <Route path='/admin' element={ <Admin /> } />
          <Route path='/profile' element={ <Profile /> } />

         </Routes>
        </div>
  );
}

export default App;
