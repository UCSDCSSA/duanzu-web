// @flow

import React from 'react';
import Header from '~/components/Header';
import Developer from './Developer';
import type { DeveloperInfo } from './types/DeveloperInfo';

type AboutState = {
  members: Array<DeveloperInfo>,
};

class About extends React.Component<{}, AboutState> {
  constructor(props: {}, context: AboutState) {
    super(props, context);
    this.state = {
      members: [{
        avatar: "https://liby.me/img/general/icon.jpg",
        name: "李子阳"
      }, {
        avatar: "https://66.media.tumblr.com/tumblr_mdzufxZkrX1rsr4fw.png",
        name: "遠坂凛"
      }],
    };
  }

  render() {
    const { members } = this.state;
    
    return (
      <div>
        <Header />
        <div className="container">
          <h2>UCSD CSSA Tec Development Team</h2>
          <h5>CSSA技术部隶属于加州大学圣地亚哥分校中国学生学者联合会，下属设立开发组和摄制组。</h5>
          <h5>UCSD短租平台是由UCSD CSSA技术部开发组开发与维护的网上租房信息发布平台。</h5>
          <br />
          <h5>开发成员</h5>
          <div className="row">
            {members.map((member) => <Developer {...member} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default About;
