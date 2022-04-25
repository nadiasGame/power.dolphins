import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

import cartReducer from './reducers/cartReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const persistedState = localStorage.getItem('libraryState')
                       ? JSON.parse(localStorage.getItem('libraryState'))
                       : { cart: [] }

const store = createStore(
  cartReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
  localStorage.setItem('libraryState', JSON.stringify(store.getState()))
})



root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
