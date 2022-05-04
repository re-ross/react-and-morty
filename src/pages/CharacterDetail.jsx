import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, DetailsButton, CharacterName, FavoriteButton } from '../components'
import axios from 'axios';

export const CharacterDetail = ({ favoriteIds, toggleFav }) => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen)
  }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => setCharacter(res.data)).catch((err) => console.log(err))
    },[id])
    return (
      <Wrapper>
    <FavoriteButton onClick={() => toggleFav(id)} isFavorite={favoriteIds.includes(id)}>Favorite</FavoriteButton>
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
  )
}
