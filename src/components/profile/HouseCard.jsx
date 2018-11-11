// @flow

import React from 'react';
import { Col, Card, Row, CardTitle } from 'react-materialize';

type House = {
  id: string,
  image: string,
  name: string
}

export default class HouseCard extends React.Component<House> {
  render() {
    /* var houseCardStyle = {
            "backgroundImage": this.props.houseImage,
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "height": "500px",
            "padding": "10px"
        } */

    const rowStyle = {
      paddingBottom: '10px',
    };
    
    const { image, name } = this.props;

    // TODO need info from data base
    return (
      <div>
        <Col s={3}>
          <Card
            className="houseImage"
            header={<CardTitle image={image} />}
          >
            <Row style={rowStyle}>
              <center>
                <h5>
                  {' '}
                  {name}
                  {' '}
                </h5>
              </center>
            </Row>
          </Card>
        </Col>
      </div>
    );
  }
}
