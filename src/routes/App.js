import React, { Component } from 'react';
import '../styles/App.scss';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="app-outlet">
          <p>First commit stuff!</p>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
