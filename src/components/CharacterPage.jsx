import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`
const Name = styled.h2`
  font-weight: bold;
  font-size: large;
`

export const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => setCharacter(res.data)).catch((err) => console.log(err))
    },[])
    return (
        <Wrapper>
            <img src={character.image} alt={character.name} />
        <Name>{character.name}</Name>
        <button onClick={toggle}>show more</button>
        {isOpen ? (
          <ul>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
          </ul>
        ) : null }
       </Wrapper>
  )
}