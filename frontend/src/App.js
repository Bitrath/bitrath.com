import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Navbar from './components/Navbar/Navbar';

//Screens
import HomeScreen from './screens/Home/HomeScreen';
import PortfolioScreen from './screens/Portfolio/PortfolioScreen';
import ShopScreen from './screens/Shop/ShopScreen';
import CartScreen from './screens/Shop/CartScreen';
import BlogScreen from './screens/Blog/BlogScreen';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="main_app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/portfolio" component={PortfolioScreen} />
          <Route exact path="/shop" component={ShopScreen} />
          <Route exact path="/shop/cart" component={CartScreen} />
          <Route exact path="/blog" component={BlogScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
