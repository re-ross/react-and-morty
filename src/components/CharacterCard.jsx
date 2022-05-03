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

export const CharacterCard = ({char}) => {
  return (
<Wrapper>
  <img src={char.image} alt={char.name} />
      <Name>{char.name}</Name>
      <Link to={`/char/${char.id}`} >
        <button>show more</button>
      </Link>
</Wrapper>

  )
}
