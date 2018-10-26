import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './components/sidenav/SideNav';
import SideBar from './components/sidebar/SideBar';
import { Route, Switch } from 'react-router-dom';
import Items from './components/item/Items';
import './App.css';
import Details from './components/details/Details';

export class App extends React.Component {

    render() {
        return (
            <Router basename='/'>
                <div className="App">
                    <div className="Container">
                        <SideNav />
                        <div className="Content">
                            <SideBar />
                            <div className="ContentPage">
                                <Switch>
                                    <Route exact path="/" component={Items} />
                                    <Route exact path='/:brand' component={Items} />
                                    <Route exact path='/:brand/:model' component={Details} />
                                    <Route path='/:brand?search=' component={Items}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;