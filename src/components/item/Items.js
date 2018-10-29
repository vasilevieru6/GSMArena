import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Data from '../../data/phone-dataset.json';
import './Items.css';
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

    contentPage: {
        width: 'calc(100% - 300px)'        
    },
    cards: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    }
};

export class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            count: 0
        }
        this.handleClickBrand = this.handleClickBrand.bind(this);
        this.handleClickChangePage = this.handleClickChangePage.bind(this);
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickBrand(count) {
        this.setState({
            count: count
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

    fillBrands(brand) {
        let phones = [];
        let search = this.props.location.search.slice(8);
        phones = brand ? Data.filter(x => x.brand === brand) : search ? Data.filter(x => x.model.includes(search)) : Data;
        return phones;
    }

    allBrands() {

    }

    render() {
        const brand = this.props.match.params.brand;
        const url = this.props.match.url;
        const devices = brand || url === '/all' ? this.fillBrands(brand) : Data;
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.cards}>
                    {devices.slice(10 * this.state.page, 10 * this.state.page + 10).map(phone => (
                            <Card className={classes.card} key={phone.model.toString()}>
                                <CardActionArea onClick={e =>this.props.history.push('/' + phone.brand + '/' + phone.model)}>
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
                    ))}
                </div>
                <div className="Pagination">
                    <Pagination onHandleChangePage={this.handleClickChangePage} page={this.state.page} count={devices.length} />
                </div>
            </div>
        );
    }
}

Item.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);