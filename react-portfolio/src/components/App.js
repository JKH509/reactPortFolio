import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './shared/Header';
import Footer from './shared/Footer';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import ContactPage from '../components/contact/ContactPage';
import GoalsPage from '../components/goals/GoalsPage';
import PortfolioPage from '../components/portfolio/PortfolioPage';
import Grid from '../components/portfolio/FirstGrid';
import BidPro from '../components/portfolio/FirstBidPro';
import Form from '../components/portfolio/FormValidation';
import Calc from '../components/portfolio/week3/Week3Page';
import Hello4 from '../components/portfolio/week4/Week4Page';
import Hello5 from '../components/portfolio/week5/Week5Page';

function App() {
    return (
<div className="">
            <Header />
            <Switch>
            <Route exact path="/" component={HomePage} />
           <Route path="/About" component={AboutPage} />
           <Route path="/Contact" component={ContactPage} />
           <Route exact path="/Portfolio" component={PortfolioPage} />
           <Route  path="/Portfolio/BidPro" component={BidPro} />
           <Route path="/Portfolio/FormValidation" component={Form} />
           <Route path="/Portfolio/Calculator" component={Calc} />
           <Route path="/Portfolio/Grid" component={Grid} />
           <Route path="/Portfolio/SayHelloW4" component={Hello4} />
           <Route path="/Portfolio/SayHelloW5" component={Hello5} />
           <Route path="/Goals" component={GoalsPage} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;