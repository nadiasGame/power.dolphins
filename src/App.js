import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Admin from './views/Admin';

function App() {
  return (
        <div className="App">
         <Routes>

          <Route path='/*' element={ <Home /> } />
          <Route path='/login' element={ <Login /> } />
<<<<<<< Updated upstream
=======
          <Route path='/admin' element={ <Admin /> } />

>>>>>>> Stashed changes
         </Routes>
        </div>
  );
}

export default App;
