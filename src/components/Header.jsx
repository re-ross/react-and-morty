import styled from 'styled-components'

const Wrapper = styled.header`
  background-color: #DB504A;
  height: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #56A3A6;`

export const Header = () => {
    return (
        <Wrapper>
            <Title>React and Morty</Title>
      </Wrapper>
  )
}
