import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import {Header, CharacterCard, Navbar} from './components'

function App() {
  const [chars, setChars] = useState([])
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then((res) => setChars(res.data.results))
      .catch((err) => console.error(err))
  }, [])


  return (
    <div className="App">
      <Header />
      <div>
 {chars.map((char) => (
          <CharacterCard char={char} key={char.id}/>
        ))}

      </div>
      <Navbar />
      </div>
  );
}

export default App;
