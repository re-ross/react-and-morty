import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

export const CharacterDetail = ({ favoriteIds, toggleFav }) => {
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
    <FavoriteBtn onClick={() => toggleFav(id)} isFavorite={favoriteIds.includes(id)}>Favorite</FavoriteBtn>
        <img src={character.image} alt={character.name} />
        <Name>{character.name}</Name>
        <button onClick={toggle}>show more</button>
        {isOpen ? (
          <ul>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
          </ul>
        ) : ('') }
       </Wrapper>
  )
}


const Wrapper = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
const Name = styled.h2`
  font-weight: bold;
  font-size: large;
`

const FavoriteBtn = styled.button`
  position: absolute;
  right: 0;
  background-color: ${(props) => props.isFavorite ? 'lightgreen' : ''};
`