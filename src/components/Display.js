import React from 'react';
import './Display.css';

const Display = () => {
    return ( 
    <div className="display-wrapper">
        <div className="ip-address">IP ADDRESS<br/><br/><span>192.168.0.1</span></div>
        <div className="location">LOCATION<br/><br/><span>Żywiec</span></div>
        <div className="timezone">TIMEZONE<br/><br/><span>CEST-4:20</span></div>
        <div className="isp">ISP<br/><br/><span>Monke</span></div>
    </div>
     );
}
 
export default Display;