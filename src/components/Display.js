import React from 'react';
import './Display.css';

const Display = ({ip, location, timezone, isp}) => {
    return ( 
    <div className="display-wrapper">
        <div className="ip-address">IP ADDRESS<br/><br/><span>{ip}</span></div>
        <div className="location">LOCATION<br/><br/><span>{location}</span></div>
        <div className="timezone">TIMEZONE<br/><br/><span>{timezone}</span></div>
        <div className="isp">ISP<br/><br/><span>{isp}</span></div>
    </div>
     );
}
 
export default Display;