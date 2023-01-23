import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import BookList from './components/BookList/BookList';
import Searchbar from "./components/Searchbar";
import WishList from './components/WishList/WishList';
import store from './app/store';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Provider store = {store}>
        <div className="App">
          <Searchbar />
          <div className='content'>
            <Routes>
              <Route path='/' element={<BookList />}/>
              <Route path='/:keyword/:page' element={<BookList />}/>
            </Routes>
            <WishList />
          </div>
        </div>
      </Provider>
    </Router>
    
  );
}

export default App;
