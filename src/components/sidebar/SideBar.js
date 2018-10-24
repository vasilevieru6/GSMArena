import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './SideBar.css'
import Data from '../../data/phone-dataset.json';


const onlyBrands = phones =>
            phones.reduce((acc, phone) => {
                acc[phone.brand] = (acc[phone.brand] || 0) + 1;
                return acc;
            }, {});

const brands = onlyBrands(Data);
const brandsKeys = Object.keys(brands);

export class SideBar extends React.Component {
 
    render() {
        return(
            <div className='SideBar'>
                    <List
                        component="nav">
                        {brandsKeys.map((brand) => (
                            <ListItem button key={brand} onClick={() => this.props.onClick(brand, brands.length)}>
                                <ListItemText primary={ brand + '(' + brands[brand] + ')' }/>
                            </ListItem>
                        ))}
                    </List>
                </div>
        );                        
    }
}