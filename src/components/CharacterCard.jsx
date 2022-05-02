import styled from 'styled-components'

const Wrapper = styled.div`
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
<Wrapper char={char}>
  <img src={char.image} alt={char.name} />
      <Name>{char.name }</Name>
</Wrapper>

  )
}
