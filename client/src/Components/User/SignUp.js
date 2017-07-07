import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { register } from '../../actions/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }
  onChangeUserName = (e) => {
    this.setState({ username: e.target.value });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value });
  }
  onChageEmail = (e) => {
    this.setState({ email: e.target.value });
  }
  onRegister = () => {
    const { username, password } = this.state;
    this.props.dispatch(register(username, password));
  }
  render() {
    return (
      <div>
        <Form>
        <Form.Field >
          <Input
            placeholder='Email'
            onChange={this.onChageEmail}
            iconPosition='left'
          >
            <Icon name='at' />
            <input />
          </Input>
        </Form.Field>
          <Form.Field >
            <input
              placeholder='User name'
              onChange={this.onChangeUserName}
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder='Password'
              type="password"
              onChange={this.onChangePassword}
            />
          </Form.Field>
          <div className="text-center">
            <Button
              type='submit'
              positive
              onClick={this.onRegister}
            >
              SignUp
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default connect()(SignUp);
