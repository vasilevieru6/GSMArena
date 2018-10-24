import React from 'react';
import SideNav from './components/sidenav/SideNav'
//import { SideBar } from './components/sidebar/SideBar';
import { SideBar } from './components/sidebar/SideBar';
import Item from './components/item/Item';
import './App.css';

export class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: null,
            page: 0,
            count: 0,
        }
        this.handleClickBrand = this.handleClickBrand.bind(this);
        this.handleClickNextPage = this.handleClickNextPage.bind(this);
        this.handleClickPreviousPage = this.handleClickPreviousPage.bind(this);
    }

    handleClickBrand(newBrand, count) {
        this.setState({
            brand: newBrand,
            count: count
        });
    }

    handleClickNextPage() {
        this.setState({
            page: this.state.page + 1
        });
    }

    handleClickPreviousPage() {
        this.setState({
            page: this.state.page - 1
        });
    }

    render() {
        return (
            <div className="App">
                <SideNav />
                <div className="Content">
                    <SideBar onClick={this.handleClickBrand} brand={this.state.brand}/>
                    <Item brand={this.state.brand} page={this.state.page} onHandleNextPage={this.handleClickNextPage} count={this.state.count}/>
                </div>
            </div>
        );
    }
}

export default App;