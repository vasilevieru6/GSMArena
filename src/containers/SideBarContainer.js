import React from 'react';
import Data from '../data/phone-dataset.json';
import { SideBar } from '../components/sidebar/SideBar';

export class SideBarContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    modifyState() {
        this.setState({
            data: Data
        })
    }

    render() {
        return <SideBar/>
    }
}