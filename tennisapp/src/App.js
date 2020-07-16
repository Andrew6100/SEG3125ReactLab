import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/pages/Home';
import ContactUs from './Components/pages/ContactUs';
import {Navbar, Nav} from 'react-bootstrap';
import Reserveacourt from './Components/pages/Reserveacourt';
import About from './Components/pages/About';
import Bookalesson from './Components/pages/Bookalesson';
import Explore from './Components/pages/Explore';
import Footer from './Components/Footer'
import { FaInfoCircle, FaLightbulb, FaCalendar, FaBook, FaAddressBook, FaTableTennis} from 'react-icons/fa';

import { I18nPropvider, LOCALES } from './i18n';
import translate from "./i18n/translate";


function App() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  return (
    <I18nPropvider locale={locale}>
      <div className="App">
        <Router>
          <header className="App-header">
          </header>
          <Navbar sticky="top" bg="light" expand="lg">
              <Navbar.Brand><Link to="/" className="text-success text-decoration-none "><FaTableTennis /><strong> {translate('lestennis')}</strong></Link></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Link to="/about" className="text-success text-decoration-none nav-link pr-4"><FaInfoCircle /> <strong>{translate('aboutus')}</strong></Link>
                  <Link to="/reserveacourt" className="text-success text-decoration-none nav-link pr-4"><FaCalendar /><strong>{translate('reserveacourt')}</strong></Link>
                  <Link to="/bookalesson" className="text-success text-decoration-none nav-link pr-4"><FaBook /><strong>{translate('bookalesson')}</strong></Link>
                  <Link to="/explore" className="text-success text-decoration-none nav-link pr-4"><FaLightbulb /><strong>{translate('explore')}</strong></Link>
                  <Link to="/contactus" className="text-success text-decoration-none nav-link pr-4"><FaAddressBook /><strong>{translate('contactus')}</strong></Link>
                  <button className="btn btn-success" onClick={() => setLocale(LOCALES.ENGLISH)}>English </button> 
                  &nbsp;
                  <button className="btn btn-success" onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
                </Nav> 
              </Navbar.Collapse>
            </Navbar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/reserveacourt">
              <Reserveacourt />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/bookalesson">
              <Bookalesson />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
          </Switch>
          
          <footer className="app-footer">
            <Footer />
          </footer>
        </Router>
      </div>
    </I18nPropvider>
  );
}

export default App;
