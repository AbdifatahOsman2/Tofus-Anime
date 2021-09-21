import { baseURL, config } from "./services";
import { Route } from 'react-router';
import Anime from "./components/Animes";
import Form from "./components/Form";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import MoreInfo from "./components/Moreinfo";
import './App.css';

function App() {

  const [animes, setAnimes] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)

  useEffect(() => {
        //  url
      const getAnime = async () => {
        const response = await axios.get(baseURL, config);
        setAnimes(response.data.records)
        console.log(response.data.records)
      }

      getAnime()

  },[toggleFetch])

  return (
    <div className="App">
    <Nav/>
    <Route exact path="/">
    <div className="item-container">
    {animes.map((anime) => (
      <Anime key ={anime.id} anime={anime} setToggleFetch={setToggleFetch}/>
    )
    )}
    </div>
    </Route>

    <Route path="/new">
      <Form anime={animes} setToggleFetch={setToggleFetch}/>
    </Route>

    <Route path="/more">
    <MoreInfo/>
    </Route>

    <Route path="/edit/:id">
      <Form anime={animes} setToggleFetch={setToggleFetch}/>
    </Route>

    </div>
  );
}

export default App;
