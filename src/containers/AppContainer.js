import React from 'react';
import SideNav from '../components/sidenav/SideNav'
import { SideBar } from '../components/sidebar/SideBar';
import Item from '../components/item/Item';
import { Details } from '../components/details/Details';
import { Route, Switch } from 'react-router-dom';


export class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            brand: null,
            page: 0,
            count: 0,
            item: null,
            clickItem: false
        }
        this.handleClickBrand = this.handleClickBrand.bind(this);
        this.handleClickChangePage = this.handleClickChangePage.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickBrand(newBrand, count) {
        this.setState({
            brand: newBrand,
            count: count,
            clickItem: false,
            item: null
        });
    }

    handleClickChangePage(e, currentPage) {
        if (currentPage > this.state.page) {
            this.setState({
                page: this.state.page + 1
            });
        } else {
            this.setState({
                page: this.state.page - 1
            });
        }
    }

    handleClickItem(brandModel) {
        let model = brandModel;
        this.setState({
            clickItem: true,
            item: model
        });
        return model;
    }

    render() {
        return (
            <div className="App">
                <div className="Container">
                    <SideNav />
                    <div className="Content">
                        <SideBar onClick={this.handleClickBrand} brand={this.state.brand} />
                        <Switch>

                            <Route path="/" render={() => {
                                return(
                                <AppContainer/>
                                );
                            }}/>
                                
                            {/* {this.state.clickItem ?
                            ( */}
                            <Route path={`${this.state.brand}/${this.state.item}`} render={() => {
                                return (
                                    <Details item={this.state.item} />
                                );
                            }} />
                            <Route path={`${this.state.brand}`} render={() => {

                                return (
                                    <Item brand={this.state.brand}
                                        page={this.state.page}
                                        count={this.state.count}
                                        onHandleChangePage={this.handleClickChangePage}
                                        onClickItem={this.handleClickItem} />
                                );
                            }} />
                            {/* )} */}
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppContainer;