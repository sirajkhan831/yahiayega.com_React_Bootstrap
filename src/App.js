import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

//pages
import CSVTU from './CSVTU';
import Home from './Home';
import PTRSU from './PTRSU';
import FORUM from './FORUM';
import Login from "./Login";
import './style1.css'

function App() {
    return (
        <div className="App">
            {/* <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid nav">
                    <div className="check">
                        <a className="navbar-brand" href="/" style={{ color: 'white' }}>YahiAyega.com
                            <img src="logo.png" alt="logo" width='35px' height='35px' />
                        </a>
                    </div>
                    <div className="navs">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="topnav-right">
                        <div className="collapse navbar-collapse topnav-right navs" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hoven" href="https://www.yahiayega.com/shop">Shop</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle hoven" href="#" id="navbarDropdown"
                                        role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Universities
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/csvtu">CSVTU</a></li>
                                        <li><a className="dropdown-item" href="/ptrsu">PTRSU</a></li>
                                        <li><a className="dropdown-item"
                                            href="https://www.yahiayega.com/medical">Medical</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hoven" href="/forum">Forum</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hoven" href="https://www.yahiayega.com/codewisdom">Code Wisdom</a>
                                </li>
                                <li>
                                    <a className="nav-link dropdown" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav> */}
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="right-side">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.yahiayega.com/shop" target="_blank">Shop</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Universities
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="/csvtu">CSVTU</a></li>
                                        <li><a class="dropdown-item" href="/ptrsu">PTRSU</a></li>
                                        <li><a class="dropdown-item" href="https://www.yahiayega.com/medical" target="_blank">Medical</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.yahiayega.com/codewisdom" target="_blank">Code Wisdom</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/forum">Forum</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="check" style={{marginLeft: '1rem'}}>
                        <a className="navbar-brand" href="/" style={{ color: 'white' }}>YahiAyega.com
                            <img src="logo.png" alt="logo" width='35px' height='35px' />
                        </a>
                    </div>
            </nav>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/csvtu" component={CSVTU} />
                    <Route exact path="/ptrsu" component={PTRSU} />
                    <Route exact path="/forum" component={FORUM} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </Router>
            <div className="footer">
                <div className="page-footer font-small blue pt-4">
                    <div className="container-fluid text-center text-md-left">
                        <div className="row">
                            <div className="check">
                                <a className="navbar-brand social" href="https://www.facebook.com"
                                    style={{ color: 'white', fontFamily: 'El Messiri', fontSize: '1.6rem' }}>
                                    <img src="FB.png" alt="logo" width='35px' height='35px' /></a>
                                <a className="navbar-brand social" href="https://www.instagram.com"
                                    style={{ color: 'white', fontFamily: 'El Messiri', fontSize: '1.6rem' }}>&emsp;&emsp;
                                    <img src="ig.png" alt="logo" width='35px' height='35px' /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3"
                        style={{ fontFamily: 'El Messiri', color: 'rgb(219, 200, 190)' }}>© 2021 Copyright :
                        <a href="https://www.yahiayega.com" style={{
                            textDecoration: 'none',
                            color: 'rgb(219, 200, 190)',
                            fontFamily: 'Pacifico'
                        }}> &nbsp;YahiAyega.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
