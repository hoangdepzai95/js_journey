import React, { Component } from 'react';
import { Route } from 'react-router';
import Logged from './Logged';
import Login from './Login';
import User from './User';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/login' component={Login} />
        <Route path='/user' component={User} />
        <Route path='/home' component={Logged} />
      </div>
    );
  }
}

export default App;
