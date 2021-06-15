import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'
import "../assets/css/App.css";
import { getCharactersRandom } from '../api/charactersRandom'


//components
import Header from "../components/Header/Header";
import Cards from "../components/Cards/Cards";
import Search from "../components/Search/Search";
import Footer from "../components/Footer/Footer";

const HomePage = () => {

    const [items, setItems] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [query, setQuery] = useState("");
    //const [hero, setHero] = useState({});
    const { search } = useLocation();
    const val = queryString.parse(search)
  
    useEffect(() => {
      getChar(val.character);
    }, [val.character]);
  
    useEffect(() => {
      if (query) {
        getChar(query);
      } else {
        getChar();
      }
    }, [query]);
  
    const getChar = (c) =>
		getCharactersRandom(c)
			.then((characters) => {
				setItems(characters);
			})
			.finally(() => {
				setLoading(false);
			}
	);

  return (
    <>
      <Header />
      <Search search={(search) => setQuery(search)} />
      <Cards items={items} isLoading={isLoading}/>
      <Footer />
    </>
  );
};

export default HomePage;
