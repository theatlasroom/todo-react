import React from 'react';
import '../App.css'; // grab the css styles

class Header extends React.Component {

  constructor(props){
    super(props);  
  }

  render(){
    return (
      <header>
        <div className="App-header">
          <h1>Ultimate Todo</h1>
        </div>
      </header>
    );
  }
}

export default Header;
