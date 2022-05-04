import { useState, useEffect } from "react";
import { CharacterCard } from "../components";
import axios from "axios";
import styled from 'styled-components'

export const Home = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.error(err))
  }, [])
  return (
   <List>
 {characters.map((character) => (
          <CharacterCard character={character} key={character.id}/>
        ))}
          </List>
  )
}


const List = styled.ul`
  list-style: none;
  padding: 1em;
`