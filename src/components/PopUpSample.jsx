/**
 * @author: Yiyang Yin
 * @date: 2017/11/12
 */

import React from 'react';

class PopUpSample extends React.Component {
  constructor() {
    super();
    this.toggle = this.toggle().bind(this);
    this.state = {
      opened: false,
    };
  }

  toggle() {
    const { opened } = this.state;

    this.setState({ opened: !opened });
  }

  render() {
    const { opened } = this.state;
    const maskStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      alignItems: 'center',
      justifyContent: 'center',
      display: opened ? 'flex' : 'none',
    };

    const loginStyle = {
      width: '300px',
      height: '300px',
      backgroundColor: 'white',
    };

    return (
      <div>
        <button type="button" onClick={this.toggle}>Toggle Popup</button>
        <div style={maskStyle} onClick={this.toggle} role="presentation">
          <div style={loginStyle} onClick={e => e.stopPropagation()} role="presentation">
            <center>
              <div style={{ display: 'flex' }}>
                <h5>Login</h5>
                <span onClick={this.toggle} role="presentation">x</span>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpSample;
