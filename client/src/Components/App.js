import React, { Component } from 'react';
import { Route } from 'react-router';
import Logged from './Logged';
import Login from './Login';
import Register from './Register';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/home' component={Logged} />
      </div>
    );
  }
}

export default App;
