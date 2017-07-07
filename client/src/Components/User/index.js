import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Button } from 'semantic-ui-react'
import Login from './Login';
import SignUp from './SignUp';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      acitveTab: 'login',
    };
  }
  changeTab(tab) {
    this.setState({ acitveTab: tab });
  }
  render() {
    const { acitveTab } = this.state;

    return (
      <div className="user">
        <div className="tab">
          <div
            className={classNames('item', { active: acitveTab === 'login' })}
            onClick={this.changeTab.bind(this, 'login')}
          >
            <span>Login</span>
          </div>
          <div
            className={classNames('item', { active: acitveTab === 'sigup' })}
            onClick={this.changeTab.bind(this, 'sigup')}
          >
            <span>SignUp</span>
          </div>
        </div>
        <div className="main">
          {
            acitveTab === 'login' ?
            <Login /> : <SignUp />
          }
        </div>
      </div>
    );
  }
}
export default connect()(Register);
