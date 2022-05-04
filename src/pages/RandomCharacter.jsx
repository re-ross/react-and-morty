import { useState } from 'react'
import axios from 'axios'
import { CharacterCard, Wrapper } from '../components'
import styled from 'styled-components'

const maxChars = 826

export const RandomCharacter = () => {
    const [character, setCharacter] = useState(null)

    const getRandomChar = () => {
        const randomId = Math.floor(Math.random() * maxChars)
        axios.get(`https://rickandmortyapi.com/api/character/${randomId}`)
            .then((res) => setCharacter(res.data))
            .catch((err) => console.log(err))
    }
    return (
    <Wrapper>
            {character ? (
                <CharacterCard character={character} />
            ) : (
                    <QuestionMark>???</QuestionMark>
            )}
        <RandomButton onClick={getRandomChar}>Get a random character!</RandomButton>
      </Wrapper>
  )
}

const QuestionMark = styled.h2`
    font-size: 9rem;
`

const RandomButton = styled.button`
  background: #8338EC;
  font-family: inherit;
  padding: 0.6em 1.3em;
  font-weight: 800;
  font-size: 12px;
  border: 1px solid black;
  border-radius: 0.7em;
  box-shadow: 0.1em 0.1em;
  &:hover{
  transform: translate(-0.05em, -0.05em);
  box-shadow: 0.15em 0.15em;
  }&:active{
  transform: translate(0.05em, 0.05em);
  box-shadow: 0.05em 0.05em;
  }
`
