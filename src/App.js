import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Main from './Main';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/login' element={<LoginPage />} />
                <Route path='/home' element={<Home />}/>
                <Route path='/search' element={<Search />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;