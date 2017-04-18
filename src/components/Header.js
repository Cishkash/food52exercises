import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Compnent responsible for the application header.
 *
 * @class Header
 * @extends Component
 */
class Header extends Component {
  /**
   * Render method. Renders the layout of the `Header` component
   *
   * @method render
   */
  render() {
    return (
      <header id="Header">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">

          {/* Mobile menu toggle */}
          <button className="navbar-toggler navbar-toggler-right"
            type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation menu items */}
          <Link className="navbar-brand" to="/">Food52 Interview</Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={`/first`}>First exercise</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/second`}>Second exercise</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
