//@flow

import React from 'react';
import Sticky from 'react-sticky-el';
import { Row, Input, Col } from 'react-materialize';
// Import UI Components

export default class Amenities extends React.Component<{}> {
   render(){
     const oriStyle = {
       float: 'left', marginRight: '15px'
     }
     const rowStyle = {
       marginLeft: '20px'
     }
     return(
       <div style={{ marginLeft: '10px' }}>
         <Row>
           <i className="small material-icons" style={oriStyle}>event_available</i>
           <h5>可用设施（室内&周边）</h5>
         </Row>
         <div style={rowStyle}>
           <Row>
             <Input s={2} type="checkbox" label="Red" />
             <Input s={2} type="checkbox" label="Red" />
             <Col s={2} />
             <Input s={2} type="checkbox" label="Red" />
             <Input s={4} type="checkbox" label="Red" />
           </Row>
           <Row>
             <Input s={2} type="checkbox" label="Red" />
             <Input s={2} type="checkbox" label="Red" />
             <Col s={2} />
             <Input s={2} type="checkbox" label="Red" />
             <Input s={4} type="checkbox" label="Red" />
           </Row>
           <Row>
             <Input s={2} type="checkbox" label="Red" />
             <Input s={2} type="checkbox" label="Red" />
             <Col s={2} />
             <Input s={2} type="checkbox" label="Red" />
             <Input s={4} type="checkbox" label="Red" />
           </Row>
           <Row>
             <Input s={2} type="checkbox" label="Red" />
             <Input s={2} type="checkbox" label="Red" />
             <Col s={2} />
             <Input s={2} type="checkbox" label="Red" />
             <Input s={4} type="checkbox" label="Red" />
           </Row>
           <Row>
             <Input s={2} type="checkbox" label="Red" />
             <Input s={2} type="checkbox" label="Red" />
             <Col s={2} />
             <Input s={2} type="checkbox" label="Red" />
             <Input s={4} type="checkbox" label="Red" />
           </Row>
         </div>
       </div>
      )
   }
}
