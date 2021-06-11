import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const randomInt = Math.round(Math.random() * 1470)
    const fetch = async () => {
      if (query === "") {
        const res = await axios(
          `http://gateway.marvel.com/v1/public/characters?limit=8&offset=${randomInt}&ts=1&apikey=${process.env.REACT_APP_MARVEL_KEY}&hash=${process.env.REACT_APP_MARVEL_HASH}`
        );
        console.log(res.data.data.results);
        setItems(res.data.data.results);
        setLoading(false);
      } else{
        const result = await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=${process.env.REACT_APP_MARVEL_KEY}&hash=${process.env.REACT_APP_MARVEL_HASH}`)
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      }
    };

    fetch();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search search={(t) => setQuery(t)}/>
      <Cards items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
