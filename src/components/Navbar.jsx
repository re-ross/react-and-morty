import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Navbar = () => {
    return (
      <Footer>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
          </ul>
        </Nav>
      </Footer>
  )
}

const Footer = styled.footer`
  height: 50px;
  padding-left: 5px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  & nav > ul {
    display: flex;
    justify-content: space-between;
    height: 100%;
    align-items: center;
  }
`

const Nav = styled.nav`
  height: 100%;
  background-color: white;
`