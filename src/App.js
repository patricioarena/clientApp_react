import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from '../src/Contexts/AuthContext';

// import { Provider } from 'react-redux'
// import generateStore from './redux/store'

import Header from './Components/Header';
import Aside from './Components/Aside'
import Nav from './Components/Nav'
import Footer from './Components/Footer';
import Signup from './Components/SignUp';
import Login from './Components/Login'
import Forgot from './Components/Forgot'
import EnviromentCustom from "./Components/Enviroment";

import NewcomersHome from './Views/NewcomersHome';
import ClientHome from './Views/ClientHome';
import SellerHome from './Views/SellerHome';
import About from './Views/About'
import Product from './Views/Product'

function App() {

  return (
    <div>
        <AuthProvider>
        <Router>
          <Nav />
          <EnviromentCustom />

          {/*<Aside/>*/}
          {/* Content Wrapper. Contains page content */}
          <div className="content-wrapper">
            <Header />
            <Aside />
            <div className="content">
              <div className="container">

                <Switch>
                  <Route exact path="/" component={NewcomersHome} />
                  <Route path="/newcomershome" component={NewcomersHome} />
                  <Route path="/clienthome" component={ClientHome} />
                  {/* <SellerRoute path="/sellerhome" component={SellerHome} /> */}
                  <Route exact path="/product" component={Product} />
                  <Route path="/product/:id" component={Product} />
                  <Route path="/about" component={About} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                  <Route path="/forgot" component={Forgot} />
                </Switch>

              </div>
            </div>
          </div>
          <Footer />
        </Router>
        </AuthProvider>
    </div>
  );

}

export default App;
