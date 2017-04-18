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
          <main className="container">
            <div className="row">
              {/* Yield child routes here */}
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
