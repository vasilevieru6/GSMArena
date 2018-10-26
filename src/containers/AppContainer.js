import React from 'react';
import SideNav from '../components/sidenav/SideNav'
import { SideBar } from '../components/sidebar/SideBar';
import Item from '../components/item/Items';
import { Details } from '../components/details/Details';
import { Route, Switch } from 'react-router-dom';


export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
       
    }

    

    render() {
        return (
            <div className="App">
                <div className="Container">
                    <SideNav />
                    <div className="Content">
                        <SideBar onClick={this.handleClickBrand} brand={this.state.brand} />
                        <div>
                            <Switch>                                
                                <Route exact path="/" component={Item}/>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;