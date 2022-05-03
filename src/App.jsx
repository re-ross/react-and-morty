import "./App.css";
import {Header, Navbar, CharacterPage} from './components'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";

function App() {



  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/char/:id' element={<CharacterPage />}/>
          </Routes>
        <Navbar />
        </Router>
    </div>

  );
}

export default App;

// make header & navbar universal, create "home page" for get all request ^