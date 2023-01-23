import './App.css';
import React from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import BookList from './components/BookList/BookList';
import rootReducer from './reducer/rootReducer';
import Searchbar from "./components/Searchbar";
import WishList from './components/WishList/WishList';import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Router>
      <Provider store = {store}>
        <div className="App">
          <Searchbar></Searchbar>
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
