import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import masterReducer from './reducers/masterReducer';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/* const persistedState = localStorage.getItem('libraryState')
                       ? JSON.parse(localStorage.getItem('libraryState'))
                       : { books: [] } */

const store = createStore(
  masterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

/* store.subscribe(()=>{
  localStorage.setItem('libraryState', JSON.stringify(store.getState()))
}) */

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
