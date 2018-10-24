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
    return (
      <TablePagination
          component="div"
          count={props.count}
          rowsPerPage={10}
          page={props.page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={(e) => props.onHandleNextPage(e, props.page)}
        />
    
    );
}

TablePaginationActions.propTypes = {
  // count: PropTypes.number.isRequired,
  // page: PropTypes.number.isRequired,
  // rowsPerPage: PropTypes.number.isRequired,
};


export default withStyles(actionsStyles)(TablePaginationActions);