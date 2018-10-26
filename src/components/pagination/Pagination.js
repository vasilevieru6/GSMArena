import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TablePagination } from '@material-ui/core';

const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

export function TablePaginationActions(props) {
  console.log(props)
    return (
      <TablePagination
          component="div"
          count={props.count}
          rowsPerPage={10}
          page={props.page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          rowsPerPageOptions={[10]}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={(e, p) => {props.onHandleChangePage(e, p)}}
        />    
    );
}

TablePaginationActions.propTypes = {
  // count: PropTypes.number.isRequired,
  // page: PropTypes.number.isRequired,
  // rowsPerPage: PropTypes.number.isRequired,
};


export default withStyles(actionsStyles)(TablePaginationActions);