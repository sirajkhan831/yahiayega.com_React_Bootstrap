import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//pages
import CSVTU from './CSVTU';
import Home from './Home';
import PTRSU from './PTRSU';
import './style1.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <div className="check">
              <a className="navbar-brand" href="http://localhost:3000/" style={{ color: 'white' }}>YahiAyega.com
                <img src="logo.png" alt="logo" width='35px' height='35px' /></a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="topnav-right">
              <div className="searchbox">
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search YahiAyega.com" aria-label="Search" id="navBarSearchForm" />
                </form>
              </div>
              <div className="collapse navbar-collapse topnav-right" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link hoven" href="https://www.yahiayega.com/shop">Shop</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle hoven" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Universities
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="/csvtu">CSVTU</a></li>
                      <li><a className="dropdown-item" href="/ptrsu">PTRSU</a></li>
                      <li><a className="dropdown-item" href="#">Medical</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link hoven" href="#">FORUM</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link hoven" href="#">CODE WISDOM</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/csvtu" component={CSVTU} />
          <Route exact path="/ptrsu" component={PTRSU} />
        </Switch>
      </Router>
      <Router><Route path="/" Component={Home} /></Router>
      <div className="footer" style={{ maxWidth: '116.31rem' }}>
        <div className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
              </div>
              <hr className="clearfix w-100 d-md-none pb-3" />
              <div className="check">
                <a className="navbar-brand social" href="https://www.yahiayega.com" style={{ color: 'white', fontFamily: 'El Messiri', fontSize: '1.6rem' }}>
                  <img src="FB.png" alt="logo" width='35px' height='35px' /></a>
                <a className="navbar-brand social" href="https://www.yahiayega.com" style={{ color: 'white', fontFamily: 'El Messiri', fontSize: '1.6rem' }}>&emsp;&emsp;
                  <img src="ig.png" alt="logo" width='35px' height='35px' /></a>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center py-3" style={{ fontFamily: 'El Messiri', color: 'rgb(219, 200, 190)' }}>© 2021 Copyright :
            <a href="https://www.yahiayega.com" style={{ textDecoration: 'none', color: 'rgb(219, 200, 190)', fontFamily: 'Pacifico' }}> &nbsp;YahiAyega.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
