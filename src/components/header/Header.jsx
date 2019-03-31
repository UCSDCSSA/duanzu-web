//@flow

import React from 'react';
import './styles/header.scss';

import {
  Card, Row, Col, Input, Button,
} from 'react-materialize';

type HeaderState = {
  login: boolean,
  opened: boolean
};

class Header extends React.Component<{},HeaderState> {
  constructor(props:{},context:HeaderState) {
    super(props,context);
    this.state = {
      login: true,
      opened: false,
    };
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

  loginDisplay = ()=> {
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
            <a className="navRightItem" onClick={() => this.toggle()}>登陆</a>
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
