import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import Body from './Body/Body';

class Layout extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Body />
      </BrowserRouter>
    )
  }
}

export default Layout;
