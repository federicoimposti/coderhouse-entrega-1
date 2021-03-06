import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { NavBarMobile } from './components/NavBarMobile/NavBarMobile'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextContainer } from './context/CartContext'
import { Cart } from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout'

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
              <Route path="/checkout/">
                <Checkout />
              </Route>
              <Route path="/">
                <ItemListContainer />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </CartContextContainer>
    </BrowserRouter>
  );
}

export default App;
