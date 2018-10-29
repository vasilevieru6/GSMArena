import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.css'
import Data from '../../data/phone-dataset.json';
import { withRouter } from 'react-router-dom';

const onlyBrands = phones =>
    phones.reduce((acc, phone) => {
        acc[phone.brand] = (acc[phone.brand] || 0) + 1;
        return acc;
    }, {});

const brands = onlyBrands(Data);
const brandsKeys = Object.keys(brands);

export class SideBar extends React.Component {

    render() {
        return (
            <div className='SideBar'> 
                <List
                    component="nav">
                    <ListItem key="all" button onClick={e => this.props.history.push('/all')}>
                        <ListItemText primary={"All("+ Data.length + ")"}/>
                    </ListItem>
                    {brandsKeys.map((brand) => (
                            <ListItem key={brand} button onClick={e => this.props.history.push('/' + brand)}>
                                <ListItemText primary={brand + '(' + brands[brand] + ')'} />
                            </ListItem>
                    ))}
                </List>
            </div>
        );
    }
}

export default withRouter(SideBar);
