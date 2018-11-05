// @flow

import React from 'react';

import {
  Card, Row, Col, Input, Button,
} from 'react-materialize';
// import Login from './Login';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      opened: false,
    };
  }

  toggle() {
    const { opened } = this.state;
    if (opened) {
      console.log('close');
      this.setState({ opened: false });
    } else {
      console.log('open');
      this.setState({ opened: true });
    }
  }

  loginDisplay() {
    const { login } = this.state;
    if (login) {
      return (
        <div>
          <Input s={12} label="用户名" />
          <Input s={12} type="email" label="邮箱" />
          <Input s={12} type="password" label="密码" />
          <Input s={12} type="password" label="确认密码" />
          <center>
            <Button waves="light" s={12}>注册账号</Button>
          </center>
        </div>
      );
    }
    return (
      <div>
        <Input s={12} label="用户名/邮箱" />
        <Input s={12} type="password" label="密码" />
        <center>
          <Button waves="light" s={12}>登录</Button>
        </center>
      </div>
    );
  }

  render() {
    const navStyle = {
      width: '100%',
      height: '60px',
      backgroundColor: 'rgba(186, 0, 0, 1)',
      display: 'flex',
      zIndex: '1000000',
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    };

    const navLeftStyle = {
      display: 'flex',
    };

    const navRightStyle = {
      flexGrow: '1000000',
      flexFlow: 'row-reverse',
      display: 'flex',
    };

    const navRightItemStyle = {
      lineHeight: '60px',
      padding: '0 15px',
    };

    const buttonStyle = {
      color: 'black',
      cursor: 'pointer',
    };

    const loginStyle = {
      width: '50%',
      height: '60%',
      backgroundColor: 'white',
    };

    const { opened } = this.state;

    const maskStyle = {
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

    return (
      <div>
        <nav style={navStyle}>
          <div style={navLeftStyle}>
            <a style={navRightItemStyle} href="/">UCSD CSSA 短租平台</a>
          </div>
          <div style={navRightStyle}>
            <Button
              style={navRightItemStyle}
              onClick={() => this.toggle()}
              onKeyDown={() => this.toggle()}
            >
登陆
            </Button>
            <a style={navRightItemStyle} href="/searchpage">搜索房源</a>
            <a style={navRightItemStyle} href="/publish">发布房源</a>
          </div>
        </nav>
        <div
          style={maskStyle}
          onClick={() => this.toggle()}
          onKeyDown={() => this.toggle()}
          role="presentation"
        >
          <div
            style={loginStyle}
            onClick={e => e.stopPropagation()}
            onKeyDown={e => e.stopPropagation()}
            role="presentation"
          >
            <center>
              <Card>
                <Row>
                  <Col style={{ width: '50%' }}>
                    <center>
                      <Button
                        style={buttonStyle}
                        onClick={() => {
                          this.setState({
                            login: true,
                          });
                        }}
                        onKeyDown={() => {
                          this.setState({
                            login: true,
                          });
                        }}
                      >
                        <h5>登录</h5>
                      </Button>
                    </center>
                  </Col>

                  <Col style={{ width: '50%' }}>
                    <center>
                      <Button
                        style={buttonStyle}
                        onClick={() => {
                          this.setState({
                            login: false,
                          });
                        }}
                      >
                        <h5>注册</h5>
                      </Button>
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
