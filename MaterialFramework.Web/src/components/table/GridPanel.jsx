import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    Paper,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    withStyles
} from 'material-ui';
import withRoot from '../../withRoot';

const styles = theme => ({
    root: {
    },
    table: {
    }
});

class GridPanel extends React.Component {

    onChangePage = (event, page) => {

    }

    render() {
        const { classes, className } = this.props;

        var tableHead =
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox />
                    </TableCell>
                    <TableCell>
                        姓名
                    </TableCell>
                    <TableCell>
                        性别
                    </TableCell>
                    <TableCell>
                        手机号
                    </TableCell>
                    <TableCell>
                        地址
                    </TableCell>
                </TableRow>
            </TableHead>;

        var tableBody =
            <TableBody>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox />
                    </TableCell>
                    <TableCell>
                        王一
                    </TableCell>
                    <TableCell>
                        女
                    </TableCell>
                    <TableCell>
                        10086
                    </TableCell>
                    <TableCell>
                        北京市
                    </TableCell>
                </TableRow>
            </TableBody>;

        var tableFooter =
            <TableFooter>
                <TableRow>
                    <TablePagination
                        count={10}
                        page={0}
                        rowsPerPage={10}
                        onChangePage={this.onChangePage}
                    />
                </TableRow>
            </TableFooter>;

        return (
            <Paper className={classNames(classes.root, className)}>
                <Table className={classes.table}>
                    {tableHead}
                    {tableBody}
                    {tableFooter}
                </Table>
            </Paper>
        );
    }
}

GridPanel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(GridPanel));