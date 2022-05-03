import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
