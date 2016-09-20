import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';


import ListStore from './stores/ListStore';

//console.log(ListStore);

function getListState(){
  return {
    items: ListStore.items
    //items: {}
  };
}

class App extends Component {
  render() {
    let items = getListState();

    console.log(items);

    return (
      <div className="App">
        <Header></Header>
        {/* <TodoList items={getListState().items}></TodoList> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
