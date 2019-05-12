/**
* @author: Dian Qi
* @date: 2019/4/13
*/

import React from 'react';
import '../styles/leasing-card.scss';

const getGenderRequirment = (gender) => {
  if (gender === 0) {
    return '仅限男生';
  }
  if (gender === 1) {
    return '仅限女生';
  }
  return '男女不限';
}

const checkGender = (gender) => {
  if (gender === 0) {
    return '#00897b';
  }
  if (gender === 1) {
    return '#e53935';
  }
  return '#01579b';
}

const livngRoomAvailable = (roomAvail) => {
  if (roomAvail[0].price !== 0 && roomAvail[0].price !== 1) {
    return (<div className="col s6" style={{
        marginTop: '5px',
        color: 'black',
        fontSize: '14px'
      }}>
      客厅价格: {roomAvail[0].price}
    </div>);
  }
  return null;
};

const bedroomAvaiable = (roomAvail) => {
  if (roomAvail[1].price !== 0 && roomAvail[1].price !== 1) {
    return (<div className="col s6 pull-s1" style={{
        marginTop: '5px',
        color: 'black',
        fontSize: '14px'
      }}>
      卧室价格: {roomAvail[1].price}
    </div>);
  }
  return null;
}

const roomAvailable = (roomAvail) => {
  const livingRoomAvail = livngRoomAvailable(roomAvail);
  const bedroomAvail = bedroomAvaiable(roomAvail);
  if (livingRoomAvail == null && bedroomAvail == null) {
    return (<div className="col s6" style={{
        marginTop: '5px',
        color: 'black',
        fontSize: '14px'
      }}>
      暂无可租房间
    </div>);
  }
  return [livingRoomAvail, bedroomAvail];
};

class LeasingCard extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      complex: undefined
    };
  }

  componentDidMount() {
    const {complex_id} = this.props.card;
    console.log(complex_id);
    fetch('/ajax/complex?action=get', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({complex_id})
    }).then((response) => {
      if (response.ok) {
        return response.json().then((data) => {
          console.log(data, 'caonima');
          this.setState({complex: data.name});
        });
      }
      // return console.error(response.statusText);
      return console.error(response);
    });
  }

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

    const {
      apt_bedroom_amount,
      apt_bathroom_amount,
      gender_req,
      start_date,
      end_date,
      user_id,
      room_avail
    } = this.props.card;
    console.log(this.props.card);
    const complex = this.state.complex;
    const imgName = complex === "undefined"
      ? "/img/react.png"
      : complex === "Palms"
        ? "/img/cv1.jpg"
        : complex === "Costa Verde"
          ? (
            Math.random() * 2 > 1
            ? "/img/cv.jpg"
            : "/img/cv1.jpg")
          : complex === "Crossroads"
            ? "/img/towers.jpg"
            : "/img/react.png";
    const houseName = "公寓名称";
    const gender = getGenderRequirment(gender_req);
    const startDate = start_date;
    const endDate = end_date;
    // const houseRent = getRooms(room_avail);
    const houseTitle = this.state.complex === "undefined"
      ? "恩齐的小屋"
      : this.state.complex;
    const houseType = apt_bedroom_amount + 'b' + apt_bathroom_amount + 'b';

    const genderColor = checkGender(gender_req);

    return (<a href="/leasing">
      <div className="leasingCard">

        <div className="row" style={{
            position: 'absolute',
            bottom: '0px',
            marginLeft: '-5px',
            marginBottom: '5px'
          }}>
          <img src={imgName} style={{
              height: '180px',
              width: '100%',
              marginBottom: '0px'
            }}/>

          <h4 className="col s6" style={{
              marginTop: '0px',
              marginBottom: '0px',
              color: 'black',
              fontSize: '14px',
              textAlign: 'left'
            }}>
            {user_id}
          </h4>
          <h4 className="col s5" style={{
              marginTop: '0px',
              marginBottom: '0px',
              color: 'black',
              fontSize: '14px',
              textAlign: 'right'
            }}>
            {houseType}
          </h4>

          <div className="col s7" style={{
              marginTop: '-2px',
              color: 'black',
              fontSize: '18px',
              fontWeight: 'bold'
            }}>
            {houseTitle}
          </div>

          <div className="col s5" style={{
              marginTop: '2px',
              fontSize: '14px',
              color: 'white'
            }}>
            <div style={{
                backgroundColor: genderColor,
                height: '20px',
                marginRight: '19px'
              }}>
              {gender}
            </div>
            ]
          </div>

          <div className="detailInfo" style={{
              width: '100%',
              marginTop: '20px',
              position: 'relative'
            }}>
            <div className="col s12" style={{
                marginTop: '-13px',
                color: 'black',
                fontSize: '14px',
                marginLeft: '0px'
              }}>
              {startDate}
              {' 至 '}
              {endDate}
            </div>

            {roomAvailable(room_avail)}

          </div>
        </div>
      </div>
    </a>);
  }
}
export default LeasingCard;
