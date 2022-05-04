import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header, Navbar } from './components'
import { Home, CharacterDetail, Favorites, RandomCharacter} from './pages';
import styled from 'styled-components'
import "./App.css";

 const App = () => {
  const [favoriteIds, setFavoriteIds] = useState(() => JSON.parse(localStorage.getItem('favoriteIds')) || [])

  const toggleFav = (id) => {
    if (favoriteIds.includes(id)) {
      const updatedFavs = favoriteIds.filter((favId) => favId !== id)
      setFavoriteIds(updatedFavs)
    } else {
      setFavoriteIds([...favoriteIds, id])
    }
  }

   useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
  }, [favoriteIds])
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/char/:id' element={<CharacterDetail favoriteIds={ favoriteIds } toggleFav={ toggleFav } />} />
            <Route path='/favorites' element={<Favorites favoriteIds={favoriteIds} toggleFav={toggleFav} />} />
            <Route path='/random' element={<RandomCharacter />} />
          </Routes>
          </Main>
        <Navbar />
        </Router>
    </div>

  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default App