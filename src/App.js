import React from 'react';
import SideNav from './components/sidenav/SideNav'
//import { SideBar } from './components/sidebar/SideBar';
import { SideBarContainer } from './containers/SideBarContainer';
import Item from './components/item/Item';

export class App extends React.Component {
    render() {
        return (
            <div>
                <SideNav />
                <SideBarContainer />
                <Item />
            </div>
        );
    }
}

export default App;