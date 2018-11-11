// @flow

import React from 'react';
import { Col, Row, Card, Tabs, Tab } from 'react-materialize';

import HouseCard from './HouseCard';
import InfoCard from './InfoCard';
import Header from '../Header';

import './styles/profile.scss';

const username = 'CSSA';

const allProfileInfo = [
  {
    id: '2',
    name: '邮箱',
    icon: 'email',
  }, {
    id: '3',
    name: '电话',
    icon: 'phone',
  }, {
    id: '4',
    name: '微信',
    icon: 'chat',
  },
];

const allHouseInfo = [
  {
    id: '1',
    name: 'CV',
    img: '/img/cv.jpg',
  }, {
    id: '2',
    name: 'Towers',
    img: '/img/cv.jpg',
  }, {
    id: '3',
    name: 'La Regencia',
    img: '/img/cv.jpg',
  }, {
    id: '4',
    name: 'ajdf',
    img: '/img/cv.jpg',
  },
  {
    id: '5',
    name: 'need database',
    img: '/img/cv.jpg',
  },
];

export default class Profile extends React.Component<{}> {
  render() {
    
    const profiles = allProfileInfo.map(({ id, name, icon }) => (
      <InfoCard key={id} id={id} name={name} icon={icon} />
    ));
    const houses = allHouseInfo.map(({ id, img, name }) => (
      <HouseCard key={id} id={id} image={img} name={name} />
    ));
    
    return (
      <div>
        <Header />
        <div className="profile">
          <div className="container user-profile">
            <h5 style={{ 'margin-bottom': 60 }}>
              {' '}
  欢迎回来,
              <span style={{ fontSize: '40px' }}>
                {' '}
                {username}
              </span>
            </h5>
            <Row>
              <Col s={12} m={8}>
                <Card>
                  <Row>
                    <Col s={12} m={5}>
                      <img src="/img/cv.jpg" className="avatar" />
                    </Col>
                    <Col s={12} m={7}>
                      <div className="all-profiles">
                        {profiles}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col s={12} m={1} />
              <Col s={12} m={3}>
                <div className="options">
                  <h6 className="option">
                    修改个人信息
                  </h6>
                  <h6 className="option">
                    修改密码
                  </h6>
                  <h6 className="option">
                    注销账号
                  </h6>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="user-houses">
          <div className="container">
            <Tabs>
              <Tab title="我的房源">
                <div>
                  <Col s={12}>
                    <Row>
                      {' '}
                      {houses}
                      {' '}
                    </Row>
                  </Col>
                </div>
              </Tab>
              <Tab title="我的收藏">
                <div>
                  <Col s={12}>
                    <Row>
                      {' '}
                      {houses}
                      {' '}
                    </Row>
                  </Col>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}
