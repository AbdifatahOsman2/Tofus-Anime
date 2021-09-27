import { baseURL, config } from "./services";
import { Route } from 'react-router';
import Anime from "./components/Animes";
import Form from "./components/Form";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from './components/Nav';
import MoreInfo from "./components/Moreinfo";
import Comments from "./components/Comments";
import './App.css';

function App() {

  const [animes, setAnimes] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)
  useEffect(() => {
    const getAnime = async () => {
      const response = await axios.get(baseURL, config);

      const url = `https://api.airtable.com/v0/appBRk6PwEffSic8E/comments`
      const respComments = await axios.get(url, config)
      const comments = respComments.data.records;
      const animeWithComments = response.data.records.map((anime) => {
        return {
          ...anime,
          fields: {
            ...anime.fields,
            comments: anime.fields.comments ? comments.filter((comment) => anime.fields.comments.includes(comment.id)) : []
          }
        }
      })
      setAnimes(animeWithComments)
    }

    getAnime()
  }, [toggleFetch])

  return (
    <div className="App">
      <Nav />
      <Route exact path="/">
        {<input className="home-searchbar" placeholder="search" />}
        <div className="item-container">
          {animes.map((anime) => (
            <Anime key={anime.id} anime={anime} setToggleFetch={setToggleFetch} />
          )
          )}
        </div>
      </Route>

      <Route path="/new">
        <Form anime={animes} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/comment/:id">
        <Comments anime={animes} setToggleFetch={setToggleFetch} />
      </Route>

      <Route path="/more">
        <MoreInfo />
      </Route>

      <Route path="/edit/:id">
        <Form anime={animes} setToggleFetch={setToggleFetch} />
      </Route>



    </div>
  );
}

export default App;
