import styled from 'styled-components'

const Nav = styled.footer`
display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  border: 10px;
  border-color: black;
`
const Circle = styled.div`
background: lightblue;
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

export const Navbar = () => {
    return (
        <Nav>
            <Circle />
            <Circle />
            <Circle />
            <Circle />
      </Nav>
  )
}
