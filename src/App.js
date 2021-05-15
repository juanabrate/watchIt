import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Home from './components/Home';


const configUrl = `https://api.themoviedb.org/3/configuration?api_key=4295c0e29a9f109077cc7792f1675b63`;
console.log('config', axios(configUrl).then(res => {console.log(res)}));

function App() {

  const [config, setConfig] = useState();

  useEffect(() => {
    axios(configUrl).then(res => {setConfig(res.data)});
    console.log('app', config);
  }, []);

  return (
    <div className="App">
      
      <Search config={config} />
      <Home />
      
      
      
      
      
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
