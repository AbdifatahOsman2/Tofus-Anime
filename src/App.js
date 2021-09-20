import { baseURL, config } from "./services";
import { Route } from 'react-router';
import { useEffect, useState, usestate } from 'react';
import axios from 'axios';
import Nav from './components/Nav';

import './App.css';

function App() {

  const [animes, setAnimes] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
        //  url

      const getAnime = async () => {
        const response = await axios.get(baseURL, config);
        console.log(response.data)
      }

      getAnime()

  
  },[toggleFetch])

  return (
    <div className="App">
    <Route exact path="/">
      <Nav/>
    </Route>
    <Route path="/new">
      <p>create form</p>
    </Route>
    <Route path="/edit/:id">
      <p>edit form</p>
    </Route>

    </div>
  );
}

export default App;
