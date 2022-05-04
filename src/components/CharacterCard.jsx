import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const CharacterCard = ({character}) => {
  return (
<Wrapper>
  <img src={character.image} alt={character.name} />
      <Name>{character.name}</Name>
      <Link to={`/char/${character.id}`} >
        <button>show me what you got</button>
      </Link>
</Wrapper>

  )
}


const Wrapper = styled.div`
margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `
const Name = styled.h2`
    font-weight: bold;
    font-size: large;
  `
