import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Home from './components/Home';
import Movie from './components/Movie';
import Nav from './components/Nav';
import Favorites from './components/Favorites';
import { FavProvider } from './components/favLogic';




const configUrl = `https://api.themoviedb.org/3/configuration?api_key=4295c0e29a9f109077cc7792f1675b63`;
console.log('config', axios(configUrl).then(res => {console.log(res)}));

function App() {

  const [config, setConfig] = useState(); 

  useEffect(() => {
    axios(configUrl).then(res => {setConfig(res.data)});
  }, []);

  return (
<FavProvider>

      <div className="App">
        <BrowserRouter>      
          <Route path="/" component={Nav} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/home" component={Home} /> 
          
            <Route exact path="/movie/:id" component={Movie} />        
            <Route exact path="/favorite" component={Favorites} />
        </BrowserRouter>   
      </div>
</FavProvider>
      
  
    
  );
}

export default App;
