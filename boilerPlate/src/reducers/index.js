import React from 'react';
import { combineReducers } from 'redux';
import BookListReducer from './reducer_bookList';
import SelectedBookReducer from './reducer_selectedBook';


const rootReducer = combineReducers({
  book:BookListReducer,
  selectedBook:SelectedBookReducer

})


export default rootReducer
