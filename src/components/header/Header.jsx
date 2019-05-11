//@flow

import React from 'react';
import '../../styles/header.scss';

import {
  Card, Row, Col, Input, Button,
} from 'react-materialize';
import Register from '../Register';
import Login from '../Login';

type HeaderState = {
  login: boolean,
  opened: boolean
};

class Header extends React.Component<{}, HeaderState> {
  constructor(props: {}, context: HeaderState) {
    super(props, context);
    this.state = {
      login: true,
      opened: false,
      user: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getStyle() {
    const { opened } = this.state;
    return {
      position: 'fixed',
      width: '100%',
      height: '100%',
      left: '0',
      top: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      justifyContent: 'center',
      display: opened ? 'flex' : 'none',
      zIndex: '1',
    };
  }

  loginDisplay = () => {
    const { login } = this.state;
    if (!login) {
      return (
        <Register />
      );
    }
    return (
      <Login />
    );
  }

  toJSONString(form) {
    const obj = {};
    const elements = form.querySelectorAll('input, select, textarea');
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      const { name, value } = element;
      if (name) {
        obj[name] = value;
      }
    }
    return JSON.stringify(obj);
  }
  isValidPassword(pwd) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(String(pwd))
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = this.toJSONString(event.target);
    if (!this.isValidPassword(data.password)) {
      console.log(data)
      return;
    }
    if (this.state.login) {
      fetch('/ajax/user?action=login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }).then(response => response.json())
        .then((response) => {
          if (response.code === 0) {
            this.setState({ user: response.content, opened: false });
          } else {
            console.log(JSON.stringify(response));
          }
        });
    } else {
      fetch('/ajax/user?action=register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: data,
      }).then(response => response.json())
        .then((response) => {
          if (response.code === 0) {
            this.setState({ user: response.content, opened: false });
          } else {
            console.log(JSON.stringify(response));
          }
        });
    }
  }

  toggle() {
    const { user, opened } = this.state;
    if (user) {
      this.setState({ user: null });
    } else if (opened) {
      console.log('close');
      this.setState({ opened: false });
    } else {
      console.log('open');
      this.setState({ opened: true });
    }
  }

  renderButton() {
    if (this.state.user) {
      return '登出';
    }
    return '登陆';
  }


  render() {
    const buttonStyle = {
      color: 'black',
      cursor: 'pointer',
    };
    return (
      <div className="header">
        <nav className="nav">
          <div className="navLeft">
            <a
              className="navRightItem"
              href="/"
            >
            UCSD CSSA 短租平台
            </a>
          </div>
          <div className="navRight">
            <a className="navRightItem" onClick={() => this.toggle()}>{this.renderButton()}</a>
            <a className="navRightItem" href="/searchpage">搜索房源</a>
            <a className="navRightItem" href="/publish">发布房源</a>
          </div>
        </nav>
        <div
          className="mask"
          style={this.getStyle()}
          onClick={() => this.toggle()}
          onKeyDown={() => this.toggle()}
          role="presentation"
        >
          <div
            className="login"
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
            role="presentation"
          >
            <center>
              <Card>
              <Row>
                  <Col style={{ width: '50%' }}>
                    <center>
                      <a
                        style={buttonStyle}
                        onClick={() => {
                          this.setState({
                            login: true,
                          });
                        }}
                      >
                        <h5>登录</h5>
                      </a>
                    </center>
                  </Col>

                  <Col style={{ width: '50%' }}>
                    <center>
                      <a
                        style={buttonStyle}
                        onClick={() => {
                          this.setState({
                            login: false,
                          });
                        }}
                      >
                        <h5>注册</h5>
                      </a>
                    </center>
                  </Col>
                </Row>
                <Row>
                  { this.loginDisplay() }
                </Row>
              </Card>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
