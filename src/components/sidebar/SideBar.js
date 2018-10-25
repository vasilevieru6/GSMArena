import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.css'
import Data from '../../data/phone-dataset.json';
import { Link } from 'react-router-dom';

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
                    {brandsKeys.map((brand) => (
                        <Link to={brand} key={brand}>  
                                <ListItem key={brand} button onClick={() => this.props.onClick(brand, brands[brand])}>
                                    <ListItemText primary={brand + '(' + brands[brand] + ')'} />
                                </ListItem>
                        </Link>     
                        ))}
                </List>
            </div>
        );
    }
}