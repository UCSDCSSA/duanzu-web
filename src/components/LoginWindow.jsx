/**
 * @author: Liby Lee
 * @modified: Xinpei Tan
 * @date: 2019/5/11
 */

// Import react related components
import React from 'react';

// Import UI Components
import {
  Input, Button, Card, Row, Col, Toast
} from 'react-materialize';
import '../styles/login-window.scss';

// Modal.setAppElement(document.getElementById('login'))
class LoginWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      opened: true,
    };
  }

  toggle() {
    this.setState({ opened: !this.state.opened });
  }
  loginDisplay = (login) => {
    if (!login) {
      return (
        <form onSubmit={this.handleSubmit}>
          <Input s={12} name="username" label="用户名" />
          <Input s={12} type="email" name="email" label="邮箱" />
          <Input s={12} name="password" type="password" label="密码" />
          <Input s={12} name="confirm_password" type="password" label="确认密码" />
          <center>
            <Button 
              waves="light" s={12}
            >
              注册账号
            </Button>
          </center>
        </form>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <Input s={12} name="email" label="用户名/邮箱" />
        <Input s={12} name="password" type="password" label="密码" />
        <center>
          <Button 
            waves="light" s={12}
          >
            登录
          </Button>
        </center>
      </form>
    );
  }
  // Minimum eight characters, at least one letter and one number
  isValidPassword(pwd) {
    var re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(String(pwd))
  }
  toJSONString = (form) => {
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
  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.toJSONString(event.target);
    if (!this.isValidPassword(data.password)) {
      console.log("Invalid password " + data);
      // return;
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
            this.props.handleLogin(response)
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
            this.props.handleLogin(response)
          } else {
            console.log(JSON.stringify(response));
          }
        });
    }
  }
  render() {

    return (
      <div className="mask-container" onClick={() => this.toggle()}>
        <div className="window-container" onClick={e => e.stopPropagation()}>
          <center>
            <Card>
              <Row>
                <Col style={{ width: '50%' }}>
                  <center>
                    <a
                      className="login-btn"
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
                      className="login-btn"
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
                { this.loginDisplay(this.state.login) }
              </Row>
            </Card>
          </center>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
