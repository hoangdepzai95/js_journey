import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/user';
import { Button } from 'semantic-ui-react'
import Login from './Login';
import SignUp from './SignUp';

const panes = [
  {
    menuItem: 'Login',
    render: () => <Login />,
  },
  {
    menuItem: 'SignUp',
    render: () => <SignUp />
  },
];
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
    this.props.dispatch(register(username, password));
  }
  render() {
    return (
      <div className="user">
        <div className="tab">
          <div className="item">
            <span>Login</span>
          </div>
          <div className="item">
            <span>SignUp</span>
          </div>
        </div>
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
          <Button
            onClick={this.onRegister}
          >
            Register
          </Button>
      </div>
    );
  }
}
export default connect()(Register);
