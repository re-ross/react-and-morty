import { useState, useEffect } from "react";
import axios from "axios";
import { CharacterCard } from "../components";

const Home = () => {
    const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err))
  }, [])
  return (
   <ul>
 {characters.map((character) => (
          <CharacterCard character={character} key={character.id}/>
        ))}
          </ul>
  )
}

export default Home