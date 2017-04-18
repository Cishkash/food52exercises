import React, { Component } from 'react';

/**
 * The first thing you see when you load up the app. Directs users
 * to select from options on the nav bar.
 *
 * @class Index
 * @extends Component
 */
class Index extends Component {
  /**
   * Renders the layout of the `Index` component. Not much to see here.
   *
   * @method render
   */
  render() {
    return (
      <div id="Index">
        <p>Select the exercise you would like to see above!</p>
      </div>
    )
  }
}

export default Index;
