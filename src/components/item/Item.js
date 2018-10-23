import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Data from '../../data/phone-dataset.json';
import './Item.css';

const styles = {
    card: {
        maxWidth: 300,
    },
    media: {
        height: 400,
    },
};

function Item(props) {
    const { classes } = props;
    const phones = Data;
    const cardArray = phones.slice(1, 10).map(phone => (
        <Card className={classes.card} key={phone.model.toString()}>
            <CardMedia className={classes.media}
                image={phone.img_url}
                title={phone.brand} />
            <CardContent>
                <Typography component="p">
                    {phone.model}
                </Typography>
            </CardContent>
        </Card>
    ));
    return (
        <div className="CadsMedia">
            {cardArray}
        </div>
    );
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);