/**
* @author: Wenlin Mao, Tianyang Lu
* @date: 2017/11/12
*/

import React from 'react';


import { Link } from 'react-router-dom';

import {
  Card,
  Collection,
  CollectionItem,
  Row,
  Col,
  Input,
  Icon,
  CardTitle,
  Tabs,
  Tab,
} from 'react-materialize';



class LeasingCard extends React.Component {
  render() {
    // The default card component may not achieve the design graph
    // Consider build our own "card" components

    // const imgName = this.props.houseImage;
    // const houseName = this.props.houseName;
    // const gender = this.props.houseSex;
    // const startDate = this.props.startDate;
    // const endDate = this.props.endDate;
    // const houseRent = this.props.rent;
    // const houseTitle = this.props.houseTitle;
    // const houseType = this.props.houseType;

    const imgName = "/img/cv.jpg";
    const houseName = "公寓名称";
    const gender = "男";
    const startDate = "2019-04-13";
    const endDate = "2019-04-13";
    const houseRent = 2300;
    const houseTitle = "恩齐的小屋";
    const houseType = "2b2b";
    
    let genderColor;

    checkGender(gender);
    function checkGender(gender) {
      if (gender == '男女不限') {
        genderColor = '#00897b';
      } else if (gender == '只限女生') {
        genderColor = '#e53935';
      } else if (gender == '只限男生') {
        genderColor = '#01579b';
      }
    }

    return (
      <a href="/leasing">
        <div
          className="leasingCard"
          style={{
            overflow: 'hidden',
            height: '270px',
            width: '100%',
            position: 'relative',
          }}
          >


          <div
            className="row"
            style={{
              position: 'absolute', bottom: '0px', marginLeft: '-5px', marginBottom: '5px',
            }}
            >
            <img src={imgName} style={{ height: '180px', width: '100%', marginBottom: '0px' }} />

            <h4
              className="col s12"
              style={{
                marginTop: '0px',
                marginBottom: '0px',
                color: 'black',
                fontSize: '14px',
              }}
              >
              {houseName}
            </h4>


            <div
              className="col s12"
              style={{
                marginTop: '-2px',
                color: 'black',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
              >
              {houseTitle}
            </div>

            <div
              className="col s12"
              style={{
                marginTop: '4px',
                fontSize: '14px',
                color: 'white',
              }}
              >
              <div style={{ backgroundColor: genderColor, width: '25%', height: '20px' }}>
                {gender}
              </div>
            </div>

            <div className="detailInfo" style={{ width: '100%', marginTop: '80px', position: 'relative' }}>
              <div
                className="col s4"
                style={{
                  marginTop: '-13px',
                  color: 'black',
                  fontSize: '14px',
                }}
                >

                $
                {houseRent}
              </div>

              <div
                className="col s4"
                style={{
                  marginTop: '-13px',
                  color: 'black',
                  fontSize: '14px',
                  marginLeft: '0px',
                }}
                >
                {startDate}
                月-
                {endDate}
                月
              </div>

              <div
                className="col s4"
                style={{
                  color: 'black',
                  marginTop: '-13px',
                  fontSize: '14px',
                  marginLeft: '0px',
                }}
                >
                {houseType}
              </div>
            </div>

          </div>
        </div>
      </a>
    );
  }
}
export default LeasingCard;
