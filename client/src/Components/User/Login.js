import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react'

export default class Login extends Component {
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
  render() {
    return (
      <div>
        <Form>
          <Form.Field >
            <Input
              placeholder='User name'
              onChange={this.onChangeUserName}
              iconPosition='left'
            >
              <Icon name='user' />
              <input />
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              placeholder='Password'
              type="password"
              onChange={this.onChangePassword}
              iconPosition='left'
            >
              <Icon name='privacy' />
              <input />
            </Input>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Remember me' />
          </Form.Field>
          <div className="text-center">
            <Button type='submit' positive>Submit</Button>
          </div>
        </Form>
      </div>
    );
  }
}
