import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextContainer } from './context/CartContext'
import { Cart } from './components/Cart/Cart'

function App() {
  return (
    <BrowserRouter>
      <CartContextContainer>
        <div className="App">
          <NavBarMobile pageWrapId={"page-wrap"} outerContainerId={"App"} />
          <NavBar />
          <div id="page-wrap">
            <Switch>
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:slug">
                <ItemListContainer />
              </Route>
              <Route path="/cart/">
                <Cart />
              </Route>
              <Route path="/">
                <ItemListContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </CartContextContainer>
    </BrowserRouter>
  );
}

export default App;
