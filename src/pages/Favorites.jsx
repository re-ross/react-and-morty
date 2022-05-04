import axios from 'axios';
import { useState, useEffect } from 'react'
import styled from 'styled-components'

export const Favorites = ({favoriteIds, toggleFav}) => {
  const [characters, setCharacters] = useState([])
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  }

    useEffect(() => {
      if (!favoriteIds.length) {
      setCharacters([])
      } else {
         axios.get(`https://rickandmortyapi.com/api/character/[${favoriteIds.join()}]`)
         .then((res) => setCharacters(res.data))
         .catch((err) => console.log(err))
             }
     }, [favoriteIds])

  return (
     <div>
          {characters?.map((character) => (
     <Wrapper>
        <FavoriteBtn onClick={() => toggleFav(character.id.toString())} isFavorite={true}>Remove from Favorites</FavoriteBtn>
        <img src={character.image} alt={character.name} />
        <Name>{character.name}</Name>
       <DetailsBtn onClick={toggle}>show more</DetailsBtn>
        {isOpen ? (
          <ul>
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Status: {character.status}</li>
          </ul>
        ) : ('') }
       </Wrapper>
          ))}
   </div>
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
  background-color: ${(props) => props.isFavorite ? '#7FB800' : ''};
`

const DetailsBtn = styled.button`
  background-color: #00A6ED;
`
