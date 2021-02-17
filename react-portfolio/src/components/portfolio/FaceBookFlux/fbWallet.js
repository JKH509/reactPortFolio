import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/fbWallet';
import AddNewItem from './AddNewItem';
import ItemsList from './ItemsList';

import "./css/style.css"
 
class fbWallet extends React.Component {
    render() {
        return (
            <main>
            <div className="container">
                <h1 className="fbWallet">Flux Wallet</h1>
                <AddNewItem />
                <ItemsList />
            </div>
            </main>
        );
    }
}
 
export default fbWallet;