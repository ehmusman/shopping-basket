import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
