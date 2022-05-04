import { Link } from 'react-router-dom'
import {Wrapper, DetailsButton, CharacterName} from './index'


export const CharacterCard = ({character}) => {
  return (
<Wrapper>
  <img src={character.image} alt={character.name} />
      <CharacterName>{character.name}</CharacterName>
      <Link to={`/char/${character.id}`} >
        <DetailsButton>show me what you got</DetailsButton>
      </Link>
</Wrapper>

  )
}
