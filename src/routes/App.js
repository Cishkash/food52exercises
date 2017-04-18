import React, { Component } from 'react';

// Import Components
import Header from '../components/Header';


/**
 * App route component. Responsible for rendering the header and footer
 * for all routes under the application's route.
 *
 * @class App
 * @extends Component
 */
class App extends Component {
  /**
   * Renders the layout of the `App` component.
   *
   * @method render
   */
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
