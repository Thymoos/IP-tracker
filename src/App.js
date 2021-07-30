import React, { useState, useEffect } from 'react';
import './App.css';
import Tracker from './components/Tracker';
import Display from './components/Display';

const defaultCords = {
  "latitude": 49.688919,
  "longitude": 19.200649
}

function App() {
  const [cords, setCords] = useState(defaultCords);
  const [data, setData] = useState();

  useEffect(()=>{
    fetch('https://geo.ipify.org/api/v1?apiKey=at_J9T6UXAUk2lTqjQD5LbX2XnlndjHg&ipAddress&domain')
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);

  const handleClick = (e) =>{
    e.preventDefault();

    setCords({
      "latitude": data.location.lat,
      "longitude": data.location.lng
    });
  }

  return (
    <div className="App">
     <header>
       <h1>IP Address Tracker</h1>
       <form action="">
         <input type="text" spellCheck="false" placeholder="Search for any IP address or domain" />
         <button type="submit" onClick={handleClick}>&gt;</button>
       </form>
     </header>
      <Display/>
     <Tracker cords={cords}/>
    </div>
  );
}

export default App;
