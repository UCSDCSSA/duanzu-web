// @flow

/**
 * @author: Liby Lee
 * @date: 2017/11/12
 */

// Import react related components
import React from 'react';
import Sticky from 'react-sticky-el';
import Select from 'react-select';

const options = {
  complex:
    [
      { value: 'cv', label: 'Costa Verde' },
      { value: 'palms', label: 'Palms' },
      { value: 'crossroad', label: 'Crossroad' },
      { value: 'lux', label: 'Lux' }
    ],
  gender:
  [
    { value: 0, label: '男' },
    { value: 1, label: '女' },
    { value: 2, label: '男女不限' },
  ],
  type:
  [
    { value: 0, label: '3b2b' },
    { value: 1, label: '2b2b' },
    { value: 2, label: '1b1b' },
  ],
  room:
  [
    { value: 0, label: '主卧' },
    { value: 1, label: '侧卧' },
    { value: 2, label: '客厅' },
  ],
  price:
  [
    { value: 0, label: '500以下' },
    { value: 1, label: '500-700' },
    { value: 2, label: '700-900' },
    { value: 3, label: '900-1100' },
    { value: 4, label: '1100以上' },
  ],
};
//
// <option value="1">500以下</option>
// <option value="2">500-700</option>
// <option value="3">700-900</option>
// <option value="4">900-1100</option>
// <option value="5">1100以上</option>

// Import UI Components
import {
  Input,
  Card,
  Row,
  Col,
  Icon,
} from 'react-materialize';
import Header from '../header/Header';
import ImageUploader from './ImageUploader';
import Amenities from './Amenities';
import { Redirect } from 'react-router-dom'

class Publish extends React.Component<{}> {
  constructor(props: {}, context: HeaderState) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      selectedOption: {
        toHome: false,
        complex: '',
        gender: '',
        type: '',
        room: '',
        price: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleClick() {
    window.location.href = '/display';
  }

  handleChange = (selectedOption) => {
      this.setState({ selectedOption: { ...this.state.selectedOption, complex: selectedOption } });
    }

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />
    }

    const publishButton = {
      width: '95%',
    };

    const inputLine = {
      width: '250px',
    };
    const { selectedOption } = this.state;
    const { complex, gender, type, room, price } = selectedOption;
    console.log(complex);
    return (
<div>
      <Header />
      <div style={{ marginLeft: '5%', marginRight: '5%' }}>
      <form onSubmit={this.handleSubmit}>

            <Row>
              <Col s={4}>
                <Sticky>
                  <Card>
                    <h4 align="center">
                                个人信息
                    </h4>
                    <Row>
                      <Col s={1} />
                      <Col s={10}>
                        <Input name="user_id" label="姓名" validate="validate" style={inputLine}>
                          <Icon>account_circle</Icon>
                        </Input>
                        <Input name="wechat_id" label="微信号" validate="validate" style={inputLine}>
                          <Icon>chat</Icon>
                        </Input>
                        <Input name="email" label="邮箱" validate="validate" style={inputLine}>
                          <Icon>email</Icon>
                        </Input>
                        <Input name="phone_number" label="电话号码" validate="validate" type="tel" style={inputLine}>
                          <Icon>phone</Icon>
                        </Input>
                      </Col>
                      <Col s={1} />
                    </Row>
                  </Card>
                </Sticky>
              </Col>
              <Col s={8}>
                <Card>
                  <Row>
                    <h4 align="center">
                                        房屋信息
                    </h4>
                  </Row>
                  <Row>
                    <Input name="start_date" s={6} label="开始日期" type="text" id="startDate" className="datepicker">
                      <Icon>date_range</Icon>
                    </Input>
                    <Input name="end_date" s={6} label="结束日期" type="text" id="endDate" className="datepicker">
                      <Icon>date_range</Icon>
                    </Input>
                  </Row>
                  <Row>
                    <Col
                      s={1}
                    >
                      <Icon>location_city</Icon>
                    </Col>
                    <Col s={5}>
                      <Select
                         name="community"
                         placeholder="小区"
                         value={complex}
                         onChange={this.handleChange}
                         options={options.complex}
                      />
                    </Col>
                    <Col
                      s={1}
                    >
                      <Icon>wc</Icon>
                    </Col>
                    <Col s={5}>
                      <Select
                         name="gender_req"
                         placeholder="租客性别"
                         value={gender}
                         onChange={(selectedOption) => {
                           this.setState({ selectedOption: { ...this.state.selectedOption, gender: selectedOption } });
                         }}
                         options={options.gender}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      s={1}
                    >
                      <Icon>home</Icon>
                    </Col>
                    <Col s={5}>
                      <Select
                         name="floor_plan"
                         placeholder="房型"
                         value={type}
                         onChange={(selectedOption) => {
                           this.setState({ selectedOption: { ...this.state.selectedOption, type: selectedOption } });
                         }}
                         options={options.type}
                      />
                    </Col>
                    <Col
                      s={1}
                    >
                      <Icon>hotel</Icon>
                    </Col>
                    <Col s={5}>
                      <Select
                         name="rome_avail"
                         placeholder="出租房间"
                         value={room}
                         onChange={(selectedOption) => {
                           this.setState({ selectedOption: { ...this.state.selectedOption, room: selectedOption } });
                         }}
                         options={options.room}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col
                      s={1}
                    >
                      <Icon>hotel</Icon>
                    </Col>
                    <Col s={5}>
                      <Select
                         name="price"
                         placeholder="价格"
                         value={price}
                         onChange={(selectedOption) => {
                           this.setState({ selectedOption: { ...this.state.selectedOption, price: selectedOption } });
                         }}
                         options={options.price}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Input name="location" s={12} label="地址" validate="validate" type="text" id="address">
                      <Icon>add_location</Icon>
                    </Input>
                  </Row>
                  <Row>
                    <div className="input-field col s12">
                      <i className="material-icons prefix">mode_edit</i>
                      <textarea id="icon_prefix2" className="materialize-textarea" />
                      <label name="notice" htmlFor="icon_prefix2" id="alert">注意事项</label>
                    </div>
                  </Row>
                  <Amenities />
                  <br />
                  {/** <div style={{marginLeft: '20px'}}>
                                    <Row>
                                        <i class="small material-icons" style={{float: 'left', marginRight: '15px'}}>insert_photo</i>
                                        <p style={{fontSize: '20px'}}>添加照片</p>
                                    </Row>
                                    <Row>
                                    <div className="file-field input-field col s6">
                                      <div class="btn grey">
                                      <p style={{fontSize: '15px'}}>
                                        <i className="material-icons left">file_upload</i>
                                        上传图片
                                      </p>

                                        <input type="file"/>
                                      </div>
                                      <div class="file-path-wrapper">
                                        <input class="file-path validate" type="text"/>
                                      </div>
                                    </Row>* */}
                                    <ImageUploader />

                                    <Row>
                                      <div className="center">
                                        <button style={publishButton} className="btn waves-effect waves-light btn-large red" type="submit" name="action">
                                          <h5>发布</h5>
                                        </button>
                                      </div>
                                    </Row>

                    </Card>

              </Col>
            </Row>

          </form>
        </div>
      </div>

    // <a href='/#/leasing/view'> change </a>

    );
  }


  //
  //   <Input s={6} label="小区" validate="validate" type="select" icon="location_city">
  //     <option value="1">CV</option>
  //     <option value="2">IG</option>
  //     <option value="3">360</option>
  //   </Input>
  //   <Input s={6} type="select" label="租客性别" icon="wc" defaultValue="3">
  //     <option value="1">男</option>
  //     <option value="2">女</option>
  //     <option value="3">男/女</option>
  //   </Input>
  // </Row>
  // <Row>
  //   <Input s={6} label="房型" validate="validate" type="select" icon="home">
  //     <option value="1">3b 2b</option>
  //     <option value="2">2b 2b</option>
  //     <option value="3">1b 1b</option>
  //   </Input>
  //   <Input s={6} label="出租房间" validate="validate" type="select" icon="hotel">
  //     <option value="1">主卧</option>
  //     <option value="2">侧卧</option>
  //     <option value="3">客厅</option>
  //   </Input>
  // </Row>
  // <Row>
  //   <Input s={6} type="select" label="价格" icon="attach_money" id="price">
  //     <option value="1">500以下</option>
  //     <option value="2">500-700</option>
  //     <option value="3">700-900</option>
  //     <option value="4">900-1100</option>
  //     <option value="5">1100以上</option>
  //   </Input>
  // </Row>
  // <Row>
  //   <Input s={12} label="地址" validate="validate" type="text" id="address">
  //     <Icon>add_location</Icon>
  //   </Input>
  // </Row>
  // <Row>
  //   <div className="input-field col s12">
  //     <i className="material-icons prefix">mode_edit</i>
  //     <textarea id="icon_prefix2" className="materialize-textarea" />
  //     <label htmlFor="icon_prefix2" id="alert">注意事项</label>
  //   </div>
  // </Row>
  //

  componentDidMount() {
    // $('#startDate').pickadate({
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year,
    //   today: 'Today',
    //   clear: 'Clear',
    //   close: 'Ok',
    //   closeOnSelect: false, // Close upon selecting a date,
    //   min: new Date(),
    // });
    // $('#endDate').pickadate({
    //   selectMonths: true, // Creates a dropdown to control month
    //   selectYears: 15, // Creates a dropdown of 15 years to control year,
    //   today: 'Today',
    //   clear: 'Clear',
    //   close: 'Ok',
    //   closeOnSelect: false, // Close upon selecting a date,
    //   min: 1,
    // });
  }

  toJSONString(form) {
    const obj = {};
    const elements = form.querySelectorAll('text, input, textarea, validate valid');
    let selectElement = form.querySelector('#test');
    console.log(selectElement);
    console.log(elements);
    for (let i = 0; i < elements.length; i += 1) {
      const element = elements[i];
      const { name, value } = element;
      if (name && value) {
        obj[name] = value;
      }
    }
    return JSON.stringify(obj);
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = this.toJSONString(event.target);
    console.log(data);
    fetch('/ajax/leasing?action=insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    }).then(response => response.json())
      .then((response) => {
        if (response.code === 0) {
          this.setState({ toHome: true });
        } else {
          console.log(JSON.stringify(response));
        }
      });
  }
}

export default Publish;
