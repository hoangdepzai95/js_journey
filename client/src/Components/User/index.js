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
      activeTab: 'login',
    };
  }
  changeTab(tab) {
    this.setState({ activeTab: tab });
  }
  render() {
    const { activeTab } = this.state;

    return (
      <div className="user-page">
        <div className="tab">
          <div
            className={classNames('item', { active: activeTab === 'login' })}
            onClick={this.changeTab.bind(this, 'login')}
          >
            <span>Login</span>
          </div>
          <div
            className={classNames('item', { active: activeTab === 'sigup' })}
            onClick={this.changeTab.bind(this, 'sigup')}
          >
            <span>SignUp</span>
          </div>
        </div>
        <div className="main">
          <div className={classNames({ hide: activeTab !== 'login' })}>
            <Login />
          </div>
          <div className={classNames({ hide: activeTab !== 'sigup' })}>
            <SignUp />
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Register);
