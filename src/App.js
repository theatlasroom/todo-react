import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';

const ITEMS = [
  {title: 'Item 1', description: 'This is an item', completed: false},
  {title: 'Item 2', description: 'This is an item', completed: false},
  {title: 'Item 3', description: 'This is an item', completed: false},
  {title: 'Item 4', description: 'This is an item', completed: false},
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <TodoList items={ITEMS}></TodoList>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
