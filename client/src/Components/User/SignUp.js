import React, { Component } from 'react';
import { Button, Checkbox, Form, Input, Icon } from 'semantic-ui-react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { register } from '../../actions/user';
import { validateUserName, validatePassword, validateEmail } from '../../utils/validate';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      validEmail: true,
      validUserName: true,
      validPassword: true,
    };
  }
  onChangeUserName = (e) => {
    this.setState({ username: e.target.value, validUserName: true, });
  }
  onChangePassword = (e) => {
    this.setState({ password: e.target.value, validPassword: true, });
  }
  onChageEmail = (e) => {
    this.setState({ email: e.target.value, validEmail: true, });
  }
  validate() {
    const { email, username, password } = this.state;
    const validEmail = validateEmail(email);
    const validPassword = validatePassword(password);
    const validUserName = validateUserName(username);
    this.setState({
      validEmail,
      validPassword,
      validUserName,
    });
    return validUserName && validPassword && validEmail;
  }
  onRegister = () => {
    const { username, password } = this.state;
    if (this.validate()) {
      this.props.dispatch(register(username, password));
    }
  }
  render() {
    const { validEmail, validPassword, validUserName } = this.state;
    return (
      <div>
        <Form>
        <Form.Field >
          <Input
            placeholder='Email'
            onChange={this.onChageEmail}
            iconPosition='left'
            className={classNames({ invalid : !validEmail})}
          >
            <Icon name='at' />
            <input />
          </Input>
          {
            validEmail ? null :
            <p className="text-danger warning">Invalid email</p>
          }
        </Form.Field>
          <Form.Field >
            <Input
              placeholder='User name'
              onChange={this.onChangeUserName}
              iconPosition='left'
              className={classNames({ invalid : !validUserName})}
            >
              <Icon name='user' />
              <input />
            </Input>
            {
              validUserName ? null :
              <p className="text-danger warning">Invalid username</p>
            }
          </Form.Field>
          <Form.Field>
            <Input
              placeholder='Password'
              type="password"
              onChange={this.onChangePassword}
              iconPosition='left'
              className={classNames({ invalid : !validPassword})}
            >
              <Icon name='privacy' />
              <input />
            </Input>
            {
              validPassword ? null :
              <p className="text-danger warning">Invalid password</p>
            }
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
