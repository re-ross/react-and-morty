import { useState } from 'react'
import axios from 'axios'
import { CharacterCard } from '../components'
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
                    <QuestionMark>??</QuestionMark>
            )}
        <button onClick={getRandomChar}>Get a random character!</button>
      </Wrapper>
  )
}

const QuestionMark = styled.h2`
    font-size: 9rem;
`

const Wrapper = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
