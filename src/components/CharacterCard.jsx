import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`

const Image = styled.div`
content:url(https://rickandmortyapi.com/api/character/avatar/2.jpeg)
`

export const CharacterCard = () => {
  return (
      <Wrapper>
          <Image />
          <p>Morty Smith</p>
    </Wrapper>
  )
}
