import styled from 'styled-components'

export const FavoriteButton = styled.button`
  position: absolute;
  right: 0;
  background-color: ${(props) => props.isFavorite ? '#7FB800' : ''};
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