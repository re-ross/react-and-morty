import { useState, useEffect } from 'react'
import { Wrapper, DetailsButton, CharacterName, FavoriteButton } from '../components'
import axios from 'axios';

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
        <FavoriteButton onClick={() => toggleFav(character.id.toString())} isFavorite={true}>Remove</FavoriteButton>
        <img src={character.image} alt={character.name} />
        <CharacterName>{character.name}</CharacterName>
       <DetailsButton onClick={toggle}>show more</DetailsButton>
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
