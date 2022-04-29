import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: coral;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Title = styled.h1`
    font-size: 1.5em;
  text-align: center;
  color: olive;`

export const Header = () => {
    return (
        <Wrapper>
            <Title>React and Morty</Title>
      </Wrapper>
  )
}
