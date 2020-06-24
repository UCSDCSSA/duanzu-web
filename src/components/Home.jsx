/**
 * @author: Liby Lee
 * @date: 2017/11/11
 */

import React from 'react';
import Axios from 'axios';
// import 'expose-loader?$!expose-loader?jQuery!jquery';
import {
  Input, Icon, Carousel
} from 'react-materialize';
import Header from './header/Header';
import LeasingCard from '~/components/LeasingCard';
import './styles/home.scss';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      cards: [],
      interval: undefined,
    };
  }

  componentDidMount() {
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: true,
      numVisible: 1,
      duration: 250,});

    let instance = M.Carousel.getInstance(elems[0]);
    if (this.state != null && !this.state.interval) {
      const i = setInterval(() => {
        instance.next();
      }, 4500);

      this.setState({
        interval: i,
      });
    }
    // Axios.get("/data/mock/get_home_cards.json").then(({ data }) => {
    //   const { content } = data;
    //   this.setState({ cards: content });
    // });
    fetch('/ajax/leasing?action=fetchall', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json().then((data) => {
            console.log(data, 'caonima');
            console.log(data);
            this.setState({ cards: data });
          });
        }
        // return console.error(response.statusText);
        return console.error(response.statusText);
      });
  }

  render() {
    const { cards } = this.state;
    return (

      <div className="home-page">

        <Header />

        <div className="image-container" style={{ width: '100%', height: '600px' }}>
          <div className="col l12 m12 s12">

            <div className="carousel" style={{height: '600px'}}>
              <a className="carousel-item"><img src="/img/cover_image1.jpg" style={{ height: '600px', width: '100%', filter: 'brightness(70%)' }} /></a>
              <a className="carousel-item"><img src="/img/cover_image2.jpg" style={{ height: '600px', width: '100%', filter: 'brightness(70%)' }} /></a>
              <a className="carousel-item"><img src="/img/cover_image3.jpg" style={{ height: '600px', width: '100%', filter: 'brightness(70%)' }} /></a>
              <a className="carousel-item"><img src="/img/cover_image4.jpg" style={{ height: '600px', width: '100%', filter: 'brightness(70%)' }} /></a>

              <div className="search-input col l10">
                <Icon className="medium material-icons grey-text lighten-1"> search </Icon>
                <div className="user-input" style={{ width: '60%', display: 'inline-flex', height: '65px' }}>
                  <Input placeholder="请输入小区" id="user_input" type="text" />
                </div>
                <a className="waves-effect waves-light btn red">搜索</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row" style={{ marginTop: '20px' }}>
            {cards.map(card => (
              // eslint-disable-next-line no-underscore-dangle
              <div className="col l3 s12 m4" key={card._id}>
                <LeasingCard
                  card={card}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
//
// houseImage="../img/house.jpeg"
// houseSex={card.sex === 'female' ? '只限女生' : '只限男生'}
// houseType={card.type}
// houseName={card.name}
// rent={card.rent}
// startDate={card.startDate}
// endDate={card.endDate}
// houseTitle={card.title}
export default Home;
