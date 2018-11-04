import React from 'react';

import GoogleMapTest from './GoogleMapTest';

class MapInstanceTest extends React.Component {
  render() {
    const inst = <GoogleMapTest />;
    setTimeout(() => {
      inst.callMe();
    }, 5000);
    return inst;
  }
}

export default MapInstanceTest;
