import React from 'react';
import ReactDOM from 'react-dom';

import Second from '../routes/Second';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Second />, div);
});

// A little story if I may. I haven't actually performed any tests inside of React
// and went off on a little journey to see if I can integrate acceptance or
// integration tests with this project. However, Jest isn't as fully featured
// as I was expecting it to be and this ended up exposing me to several modules
// that are meant to tackle the different testing flavors (Mocha, Nightmare, Karma)
// and utilities like enzyme. Was a win overall but I think my efforts to solving
// the task at hand should be what I need to focus on now.
//
// Leaving the dependencies in so I can go back and set them up later however.
