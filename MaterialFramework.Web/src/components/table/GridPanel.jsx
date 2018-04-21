import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui';
import Card from '../card/Card';
import CardActions from '../card/CardActions';
import Paper from '../paper/Paper';
import Checkbox from '../form/Checkbox';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TablePagination from './TablePagination';

const styles = theme => ({
    root: {
    },
    table: {
    }
});

class GridPanel extends React.Component {

    onChangePage = (event, page) => {

    }

    parseTopBar = (n) => {
        return <CardActions>{n.props.children}</CardActions>;
    }

    parseBottomBar = (n) => {

    }

    parseTableHead = (n) => {
        var tableRow = <TableRow>{n.props.children.map((m, index) => {
            if (m.props.checkbox) {
                return <TableCell padding={'checkbox'} key={index}><Checkbox /></TableCell>;
            } else {
                return <TableCell key={index}>{m.props.children}</TableCell>;
            }
        })}</TableRow>;

        return <TableHead>{tableRow}</TableHead>;
    }

    parseTableBody = (data, tableHead) => {
        var tableRows = data.map((row, rowIndex) => {
            return <TableRow hover={true} selected={rowIndex % 2 === 0 ? true : false} key={rowIndex}>{tableHead.props.children.map((col, colIndex) => {
                if (col.props.checkbox) {
                    return <TableCell padding={'checkbox'} key={colIndex}><Checkbox /></TableCell>;
                } else {
                    return <TableCell key={colIndex}>{row[col.props.name]}</TableCell>;
                }
            })}</TableRow>;
        });

        return <TableBody>{tableRows}</TableBody>;
    }

    render() {
        const { classes, className, children, data, ...others } = this.props;

        var topBar = null;
        var tableHead = null;
        var tableBody = null;
        var bottomBar = null;

        if (children != null && Array.isArray(children)) {
            children.forEach((n) => {
                if (n.type.name === 'TopBar') { // ../placeholder/TopBar
                    topBar = this.parseTopBar(n);
                } else if (n.type.name === 'BottomBar') { // ../placeholder/BottomBar
                    bottomBar = this.parseBottomBar(n);
                } else if (n.type.name === 'Columns') { // ../placeholder/Columns
                    tableHead = this.parseTableHead(n);
                    tableBody = this.parseTableBody(data, n);
                }
            });
        } else if (children != null && !Array.isArray(children)) {
            if (children.type.name === 'TopBar') {
                topBar = this.parseTopBar(children);
            } else if (children.type.name === 'BottomBar') {
                bottomBar = this.parseBottomBar(children);
            } else if (children.type.name === 'Columns') {
                tableHead = this.parseTableHead(children);
                tableBody = this.parseTableBody(data, children);
            }
        }

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
            <Card raised={true} className={classNames(classes.root, className)} {...others}>
                {topBar}
                <Paper>
                    <Table className={classes.table}>
                        {tableHead}
                        {tableBody}
                        {tableFooter}
                    </Table>
                </Paper>
            </Card>
        );
    }
}

export default withStyles(styles)(GridPanel);