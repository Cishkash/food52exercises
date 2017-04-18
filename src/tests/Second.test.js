import React from 'react';
import ReactDOM from 'react-dom';

import Second from '../routes/Second';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Second />, div);
});
