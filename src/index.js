import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/jokes' element={<Jokes/>}></Route>
    </Routes>
  </BrowserRouter>
  
);




