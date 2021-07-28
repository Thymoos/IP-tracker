import './App.css';
import Tracker from './components/Tracker';
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
     <Tracker/>
    </div>
  );
}

export default App;
