import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
 import Home from './cards';
// import Carouse from './Carouse';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
      <Home />
    {/* <Carouse/> */}
  </React.StrictMode>
);

