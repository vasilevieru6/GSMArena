import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Data from '../../data/phone-dataset.json';
import './Item.css';
import Pagination from '../pagination/Pagination.js';

const styles = {
    card: {
        maxWidth: 300,
        width: 300,
        margin: 20,
        height: 500,
        minWidth: 300
    },
    media: {
        height: 400,
    },
};

function fillBrands(brand) {
    const phones = [];
    Data.forEach(element => {
        if(element.brand === brand){
            phones.push(element);
        }
    });

    return phones;
}

function Item(props) {
    const { classes } = props;
    const phones = props.brand ? fillBrands(props.brand) : Data;
    const cardArray = phones.slice(10 * props.page, 10 * props.page + 10).map(phone => (
        <Card className={classes.card} key={phone.model.toString()}>
            <CardActionArea>
                <CardMedia className={classes.media}
                           image={phone.img_url}
                           title={phone.brand} />
                <CardContent>
                    <Typography component="p">
                        {phone.model}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    ));

    return (


        <div className="ContentPage">
            <div className="Cards">
                {cardArray}
            </div>
            <div className="Pagination">
                <Pagination onHandleNextPage={props.onHandleNextPage} page={props.page} count={props.count}/>
            </div>
        </div>

    );
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);