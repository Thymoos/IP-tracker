import './App.css';
import Map from './components/Map';
import Display from './components/Display';

function App() {
  return (
    <div className="App">
     <header>
       <h1>IP Address Tracker</h1>
       <form action="">
         <input type="text" spellcheck="false" placeholder="Search for any IP address or domain" />
         <button type="submit">&gt;</button>
       </form>
     </header>
      <Display/>
     <Map/>
    </div>
  );
}

export default App;
