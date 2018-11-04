/**
 * @author: Yiyang Yin
 * @date: 2017/11/12
 */
// @flow
import React from 'react';
import Axios from 'axios';
import Header from './Header';


class DeveloperCard extends React.Component {
  componentDidMount() {
    $('.card-image').each(function () {
      const width = $(this).width();
      $(this).height(width);
    });
  }

  render() {
    return (
      <div className="col s3">
        <div className="card" style={{ height: '150px', width: '150px', marginTop: '20px' }}>
          <div
            className="card-image"
            style={{
              backgroundImage: "url('/img/developer.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '150px',
            }}
          />
          <div style={{ padding: '0 10px' }}>
            <h5>{this.props.developerName}</h5>
          </div>
        </div>
      </div>
    );
  }
}

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:21023/ajax/about?action=get_members').then((res) => {
      this.setState({
        members: res.data.content,
      });
    });
  }

  render() {
    // load all developer's data to array
    const allDeveloperElement = [];
    for (let i = 0; i < this.state.members.length; i++) {
      allDeveloperElement.push(
        <DeveloperCard developerId={i} developerName={this.state.members[i].name} />,
      );
    }

    return (
      <div>
        <Header />
        <div className="container">
          <h2>UCSD CSSA Tec Development Team</h2>
          <h5>CSSA技术部隶属于加州大学圣地亚哥分校中国学生学者联合会，下属设立开发组和摄制组。</h5>
          <h5>UCSD短租平台是由UCSD CSSA技术部开发组开发与维护的网上租房信息发布平台。</h5>
          <br />
          <h5>开发组组长</h5>
          <br />
          <h5>部门成员</h5>
          <div className="row">
            {allDeveloperElement}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
