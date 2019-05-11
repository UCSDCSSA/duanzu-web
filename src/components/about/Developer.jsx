// @flow

import React from 'react';
import type { DeveloperInfo } from './types/DeveloperInfo';

import '../../styles/developer.scss';

export default class Developer extends React.Component<DeveloperInfo> {
  render() {
    const { avatar, name } = this.props;
    return (
      <div className="col s3">
        <div className="card developer">
          <div className="developer-image" style={{ backgroundImage: `url('${avatar}')` }} />
          <div className="developer-name">
            <h5>{name}</h5>
          </div>
        </div>
      </div>
    );
  }
}
