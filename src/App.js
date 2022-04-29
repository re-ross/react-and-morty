import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <p>
          React and Morty
        </p>
      </header>

      <div className="container">
        <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" alt="morty" />
        <p>Morty Smith</p>
      </div>
      <footer className="navbar">
        <section id="circle"></section>
        <section id="circle"></section>
        <section id="circle"></section>
        <section id="circle"></section>
      </footer>
    </div>
  );
}

export default App;
