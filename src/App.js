import React, { useState, useEffect } from 'react';
import './App.css';
import Tracker from './components/Tracker';
import Display from './components/Display';

const defaultCords = {
  "latitude": 49.688919,
  "longitude": 19.200649
}

const defaultData = {
  "ip": 111,
  "location": {
    "city": "Żywiec",
    "timezone": 420
  },
  "isp": "Monke"
}

function App() {
  const [cords, setCords] = useState(defaultCords);
  const [data, setData] = useState(defaultData);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false);

  const url = `https://geo.ipify.org/api/v1?apiKey=at_J9T6UXAUk2lTqjQD5LbX2XnlndjHg&ipAddress=${search}&domain=${search}`;

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          const coords = await [json.location.lat, json.location.lng];
          setCords({
            "latitude": coords[0],
            "longitude": coords[1]
          })
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
  }, [click]);

  const handleChange = (e) =>{
    const input = e.target.value;
    
    setSearch(input);
  }


  const handleClick = (e) =>{
    e.preventDefault();
    setClick(!click)
  }

  return (
    <div className="App">
     <header>
       <h1>IP Address Tracker</h1>
       <form action="">
         <input onChange={handleChange} type="text" spellCheck="false" placeholder="Search for any IP address or domain" />
         <button type="submit" onClick={handleClick}>&gt;</button>
       </form>
     </header>
      <Display ip={data.ip} location={data.location.city} timezone={data.location.timezone} isp={data.isp}/>
     <Tracker cords={cords}/>
    </div>
  );
}

export default App;
