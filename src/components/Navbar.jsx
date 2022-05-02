import styled from 'styled-components'

const Nav = styled.footer`
display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
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
