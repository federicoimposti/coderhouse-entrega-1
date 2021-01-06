import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from "./components/NavBarMobile/NavBarMobile";

function App() {
  return (
    <div className="App">
      <NavBarMobile pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <NavBar />
      <div id="page-wrap">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido 2021
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React js
        </a>
      </header>
      </div>
    </div>
  );
}

export default App;
