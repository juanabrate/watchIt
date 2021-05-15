import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Home from './components/Home';
import Movie from './components/Movie';


const configUrl = `https://api.themoviedb.org/3/configuration?api_key=4295c0e29a9f109077cc7792f1675b63`;
console.log('config', axios(configUrl).then(res => {console.log(res)}));

function App() {

  const [config, setConfig] = useState();

  useEffect(() => {
    axios(configUrl).then(res => {setConfig(res.data)});
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
      

        <Route exact path="/search" component={Search} />
        <Route exact path="/home" component={Home} /> 
        <Route exact path="/movie/:id" component={Movie} />

      </BrowserRouter>   
    </div>
  );
}

export default App;
