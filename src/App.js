import React , {useEffect,useState} from 'react';
import './App.css';
import Header from './components/Header'
import axios from 'axios';
import CharacterTable from './components/CharactersTable'

const hash =  "bd0722d5750b6362d5ba0212ca36726b"

function App() {
    const[items,setItems] = useState([])
    const[isLoading,setLoading] = useState(true)
  
    useEffect(()=>{
        const fetch = async()=>{
              const result = await axios(`http://gateway.marvel.com/v1/public/characters?limit=8&offset=125&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=${hash}`)
              console.log(result.data.data.results)
              setItems(result.data.data.results)
              setLoading(false)
      }
  
      fetch()
    },[])
  
    return (
      <div className="container">
        <Header />
        <CharacterTable items={items} isLoading={isLoading} />
      </div>
    );
  }
  

export default App;