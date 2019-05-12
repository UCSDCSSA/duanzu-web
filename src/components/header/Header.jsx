//@flow

import React from 'react';
import '../../styles/header.scss';

import {
  Card, Row, Col, Input, Button,
} from 'react-materialize';
import LoginWindow from '../LoginWindow';

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
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  getStyle() {
    const { opened } = this.state;
    return {
      display: opened ? 'flex' : 'none',
    };
  }

  // loginDisplay = () => {
  //   const { login } = this.state;
  //   if (!login) {
  //     return (
  //       <Register />
  //     );
  //   }
  //   return (
  //     <Login />
  //   );
  // }

  handleLogin = (response) => {
    this.setState({ isLoggedIn: true, opened: false });
    this.props.handleLogin(response);
  }
  toggle() {
    const { isLoggedIn, opened } = this.state;
    if (isLoggedIn) {
      this.props.handleLogout();
      this.setState({ isLoggedIn: false });
    } else {
      if (opened) {
        this.setState({ opened: false });
      } else {
        this.setState({ opened: true });
      }
    }
  }

  renderButton() {
    if (this.state.isLoggedIn) {
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
            <a
              className="navRightItem"
              href="/about"
            >
              关于我们
            </a>
          </div>
          <div className="navRight">
            <a className="navRightItem" onClick={() => this.toggle()}>{this.renderButton()}</a>
            <a className="navRightItem" href="/searchpage">搜索房源</a>
            <a className="navRightItem" href="/publish">发布房源</a>
          </div>
        </nav>
        <div
          style={this.getStyle()}
          onClick={() => this.toggle()}
          role="presentation"
        >
          <LoginWindow handleLogin={this.handleLogin} />
        </div>
      </div>
    );
  }
}

export default Header;
