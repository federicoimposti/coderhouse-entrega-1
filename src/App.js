import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBarMobile pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <NavBar />
      <div id="page-wrap">
        <ItemListContainer greeting={'Aquí se mostrará el catálogo'}/>
      </div>
    </div>
  );
}

export default App;
