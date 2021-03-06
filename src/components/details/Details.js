import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Data from '../../data/phone-dataset.json';
import './Details.css';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 900,
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    image: {

    }
});

function fillBrands(brandModel) {
    return Data.filter(x => x.model === brandModel)
}

function SimpleTable(props) {
    const { classes } = props;
    const details = fillBrands(props.match.params.model);
    const keys = Object.keys(details[0]);

    return (
        <div>
            <div className="Image">
                <img src={details[0]["img_url"]} alt={details[0]["brand"]} />
                <p>{details[0]["brand"] + " " + details[0]["model"]}</p>
            </div>
            <div className="Details">

                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Characteristic</TableCell>
                                <TableCell>Value</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {keys.filter(x => details[0][x] !== "").map(row => {

                                return (
                                    <TableRow key={row}>
                                        <TableCell component="th" scope="row">
                                            {row}
                                        </TableCell>
                                        <TableCell>{details[0][row]}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);