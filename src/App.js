import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LibraryList from './components/library-list/library-list.components';
import Books from './components/books/books.component';
import './App.css';

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={LibraryList}/>
      <Route exact path='/library/books' component={Books}/>
    </Switch>
    </div>
  );
}

export default App;
