import styled from 'styled-components'

export const Header = () => {
    return (
        <Wrapper>
            <Title>React and Morty</Title>
      </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #F6511D;
  height: 80px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  `

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #FFB400;`
