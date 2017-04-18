import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

// Import the route components
import App from './routes/App.js';
import Index from './routes/Index.js';
import First from './routes/First.js';
import Second from './routes/Second.js';

/**
 * Sets up the application routes
 * @param {Object} props Will take an arbitrary amount of params that can be
 *                       applied to the Router component
 */
const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="first" component={First} />
      <Route path="second" component={Second} />
    </Route>
  </Router>
);

export default Routes;
