import './App.css';
import React from 'react';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import BookList from './components/BookList/BookList';
import rootReducer from './reducer/rootReducer';
import WishList from './components/WishList/WishList';

const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <div className='content'>
          <BookList></BookList>
          <WishList></WishList>
        </div>
      </div>
    </Provider>
  );
}

export default App;
