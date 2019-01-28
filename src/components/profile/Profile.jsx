// @flow

import React from 'react';
import { Col, Row, Card, Tabs, Tab } from 'react-materialize';

import LeasingCard from '../LeasingCard';
import InfoCard from './InfoCard';
import Header from '../Header';
import Axios from 'axios';

import './styles/profile.scss';


export default class Profile extends React.Component<{}> {
  constructor (props, context) {
      super(props, context);

      this.state = {
          profileInfo: [],
          housesInfo: [],
          username: [],
      }
  }

  componentDidMount() {

      Axios.get("/data/mock/get_profile_info.json").then(({ data }) => {
        const { content, user} = data;

        this.setState({profileInfo: content});
        this.setState({username: user});
        //console.log(profileInfo);
      });


      Axios.get("/data/mock/get_profile_houses_info.json").then(({data}) => {
        const{content} = data;
        this.setState({housesInfo: content});
        //console.log(houseInfo);
      });
  }

  render() {

    const {profileInfo} = this.state;
    const {housesInfo} = this.state;
    const {username} = this.state;


    return (
      <div>
        <Header />
        <div className="profile">
          <div className="container user-profile">
          {username.map((user) => (
            <h5 style={{ marginTop: '2px', marginBottom:'30px' }}>
              欢迎回来， {user.name}
            </h5>
          ))} 

            <Row>
              <Col s={12} m={8}>
                <Card>
                  <Row>
                    <Col s={12} m={5}>
                      <img src="/img/cv.jpg" className="avatar" />
                    </Col>
                    <Col s={12} m={7}>
                      <div className="all-profiles">
                        {profileInfo.map((profile) => (
                            <InfoCard
                                id={profile.id}
                                name={profile.name}
                                icon={profile.icon}
                                context={profile.context}
                            />
                        ))}
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
            <div className="row" style={{ marginTop: '20px' }}>
              <h5 style={{ marginTop: '60px', marginLeft:'10px' }}> 我的房源</h5>
              {housesInfo.map((card) => (
                <div className="col l3 s12 m4">
                  <LeasingCard
                    houseImage={card.image}
                    houseSex={card.sex === 'female' ? '只限女生' : '只限男生'}
                    houseType={card.type}
                    houseName={card.name}
                    rent={card.rent}
                    startDate={card.startDate}
                    endDate={card.endDate}
                    houseTitle={card.title}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="container">
            <div className="row" style={{ marginTop: '20px' }}>
              <h5 style={{ marginTop: '60px', marginLeft:'10px' }}> 我的收藏</h5>
              {housesInfo.map((card) => (
                  <div className="col l3 s12 m4">
                    <LeasingCard
                        houseImage={card.image}
                        houseSex={card.sex === 'female' ? '只限女生' : '只限男生'}
                        houseType={card.type}
                        houseName={card.name}
                        rent={card.rent}
                        startDate={card.startDate}
                        endDate={card.endDate}
                        houseTitle={card.title}
                    />
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
