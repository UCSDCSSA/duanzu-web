// @flow

import React from 'react';
import { Row, Col, Icon } from 'react-materialize';

type UserInfo = {
  icon: string,
  name: string,
  id: string,
  context: string,
}

export default class InfoCard extends React.Component<UserInfo> {
  render() {
    const { icon, name, id, context } = this.props;
    // TODO need info from data base
    return (
      <div>
        <div>
          <Row>
            <Col s={4}>
              <center>
                <h7>
                  <Icon small left>{icon}</Icon>
                  {name}
                </h7>
              </center>
            </Col>
            <Col s={7}>
              <h6>{context}</h6>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
