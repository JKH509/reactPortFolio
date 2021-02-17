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
import BidProHome from '../components/portfolio/bidpro/home/BPhomePage';
import fbWallet from '../components/portfolio/FaceBookFlux/fbWallet';

import PlankPage from '../components/portfolio/plankcooking/src/components/home/HomePage';
import AboutPlank from '../components/portfolio/plankcooking/src/components/about/AboutPage';
import ShopPlank from '../components/portfolio/plankcooking/src/components/shop/ShopPage';
import CookBooksPage from '../components/portfolio/plankcooking/src/components/shop/CookBooksPage';


import ReviewsPlank from '../components/portfolio/plankcooking/src/components/reviews/ReviewsPage';
import RecipesPlank from '../components/portfolio/plankcooking/src/components/recipes/RecipesPage';
import ContactPlank from '../components/portfolio/plankcooking/src/components/contact/ContactPage';

 import CartPage from '../components/portfolio/plankcooking/src/components/cart/CartPage';
// import CartPageTwo from './cart/CartPageTwo';

function App() {
    return (
<div className="">
            <Header  />
            <Switch>
            <Route exact path="/" component={HomePage} />
           <Route path="/About" component={AboutPage} />
           <Route path="/Contact" component={ContactPage} />
           <Route exact path="/Portfolio" component={PortfolioPage} />
           <Route  path="/Portfolio/BidProPage" component={BidPro} />
           <Route path="/Portfolio/FormValidation" component={Form} />
           <Route path="/Portfolio/Calculator" component={Calc} />
           <Route path="/Portfolio/Grid" component={Grid} />
           <Route path="/Portfolio/SayHelloW4" component={Hello4} />
           <Route path="/Portfolio/SayHelloW5" component={Hello5} />
           <Route path="/Portfolio/BidPro" component={BidProHome} />
           <Route path="/Portfolio/FluxWallet" component={fbWallet} />
           <Route path="/Goals" component={GoalsPage} />

           <Route path="/Portfolio/PlankCooking" component={PlankPage} />
           <Route path="/Portfolio/about" component={AboutPlank} />
           <Route path="/Portfolio/shop" component={ShopPlank} />
           <Route path="/Portfolio/cookbooks" component={CookBooksPage} />


           <Route path="/Portfolio/reviews" component={ReviewsPlank} />
           <Route path="/Portfolio/about" component={AboutPlank} />
           <Route path="/Portfolio/recipes" component={RecipesPlank} />
           <Route path="/Portfolio/contact" component={ContactPlank} />
           <Route path="/Portfolio/cart" component={CartPage} />
            </Switch>
            <Footer />
        </div>
    )
}

export default App;






// import CartPage from './cart/CartPage';
// import CartPageTwo from './cart/CartPageTwo';
// import RecipesPage from './recipes/RecipesPage';



// import CookBooksPage from './shop/CookBooksPage';
// import "../components/shared/Global.css";


// function App() {
//     return (
//         <div >
//             <Header />
//             <Switch>
//             
//             <Route path="/about" component={AboutPage} />
//             <Route path="/contact" component={ContactPage} />
//             <Route path="/recipes" component={RecipesPage} />
//             <Route path="/reviews" component={ReviewsPage} />
//             <Route exact path="/shop" component={ShopPage} />
//             <Route path="/shop/cookbooks" component={CookBooksPage} />
//             <Route path="/testimonials" component={TestimonialsPage} />
//             <Route exact path="/cart" component={CartPage} />
//             <Route  path="/cart/step2" component={CartPageTwo} />