import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreContextProvider from './components/context/StoreContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StoreContextProvider>
    <Router>
      <App />
    </Router>
  </StoreContextProvider>
);
