import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/user';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onRegister = () => {
    const { username, password } = this.state;
    this.props.dispatch(register({ username, password }));
  }
  render() {
    return (
      <div className="register">
        <div>
          <span>username</span>
          <input
            onChange={this.onChangeUserName}
          />
        </div>
        <div>
          <span>password</span>
          <input
            onChange={this.onChangePassword}
          />
        </div>
        <button
          onClick={this.onRegister}
        >
          Register
        </button>
      </div>
    );
  }
}
export default connect()(Register);
