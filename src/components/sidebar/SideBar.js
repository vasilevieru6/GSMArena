import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.css'


export class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: true,
        };
    }

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };


    render() {
        return(
            <div className='SideBar'>
            <div className="SideBarContent">
                <List
                    component="nav">
                    <ListItem button>
                        <ListItemText>Samsung ({})</ListItemText>
                    </ListItem>
                    <ListItem button>
                        <ListItemText>Nokia ({})</ListItemText>
                    </ListItem>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemText>Lg ({})</ListItemText>
                    </ListItem>
                </List>
            </div>
        </div>

        );
    }
}