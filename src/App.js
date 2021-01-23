import './App.css';
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBarMobile pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <NavBar />
      <div id="page-wrap">
        {/*<ItemListContainer />*/}
        <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
