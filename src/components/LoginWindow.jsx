/**
 * @author: Liby Lee
 * @modified: Xinpei Tan
 * @date: 2019/5/11
 */

// Import react related components
import React from 'react';

// Import UI Components
import {
  Input, Button, Card, Row, Col,
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

  render() {
    function loginDisplay(login) {
      if (!login) {
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
                { loginDisplay(this.state.login) }
              </Row>
            </Card>
          </center>
        </div>
      </div>
    );
  }
}

export default LoginWindow;
