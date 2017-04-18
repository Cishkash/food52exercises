import React, { Component } from 'react';
import '../styles/App.scss';

// Import Components
import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <div id="App">
        <div className="app-outlet">
          <Header />

          {/* Yield child routes here */}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
