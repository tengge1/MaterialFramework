import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui';
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
import TablePaginationActions from './TablePaginationActions';

import TopBar from '../placeholder/TopBar';
import BottomBar from '../placeholder/BottomBar';
import Columns from '../placeholder/Columns';
import Column from '../placeholder/Column';
import CheckboxColumn from '../placeholder/CheckboxColumn';
import RowNumber from '../placeholder/RowNumber';

const styles = theme => ({
    root: {

    },
    headPaper: {
        position: 'sticky'
    },
    bodyPaper: {
        maxHeight: 'calc(100% - 220px)',
        overflow: 'auto'
    },
    footerPaper: {
        position: 'sticky',
        bottom: 0
    },
    subTableContainer: {
        overflow: 'auto'
    }
});

class GridPanel extends React.Component {

    state = {
        time: new Date().getTime()
    };

    rowsPerPage = 10; // 每页的行数
    page = 0; // 第几页（从0开始计数）
    count = 0; // 记录总条数
    rows = []; // 每行的数据

    refresh = () => {
        this.setState({
            time: new Date().getTime()
        });
    }

    onChangePage = (event, page) => {
        this.page = page;
        this.refresh();
    }

    onChangeRowsPerPage = (event) => {
        this.rowsPerPage = event.target.value;
        this.refresh();
    }

    parseTopBar = (n) => {
        return <CardActions>{n.props.children}</CardActions>;
    }

    parseBottomBar = (n) => {
        return <CardActions>{n.props.children}</CardActions>;
    }

    parseTableHead = (n) => {
        const tableRow = <TableRow>{n.props.children.map((m, index) => {
            if (m.type.name === CheckboxColumn.name) {
                return <TableCell padding={'checkbox'} key={index}><Checkbox /></TableCell>;
            } else if (m.type.name === RowNumber.name) {
                return <TableCell padding={'checkbox'} key={index}></TableCell>;
            } else if (m.type.name === Column.name) {
                return <TableCell key={index}>{m.props.children}</TableCell>;
            } else {
                return <TableCell></TableCell>;
            }
        })}</TableRow>;

        return <TableHead>{tableRow}</TableHead>;
    }

    parseTableBody = (head) => {
        const { classes } = this.props;

        const rows = this.rows.slice(this.rowsPerPage * this.page, this.rowsPerPage * (this.page + 1));

        const tableRows = rows.map((row, rowIndex) => {
            return <TableRow hover={true} selected={rowIndex % 2 === 0 ? true : false} key={rowIndex}>{head.props.children.map((col, colIndex) => {
                if (col.type.name === CheckboxColumn.name) {
                    return <TableCell padding={'checkbox'} key={colIndex}><Checkbox /></TableCell>;
                } else if (col.type.name === RowNumber.name) {
                    return <TableCell padding={'checkbox'} key={colIndex}>{this.rowsPerPage * this.page + rowIndex + 1}</TableCell>;
                } else if (col.type.name === Column.name) {
                    return <TableCell key={colIndex}>{row[col.props.name]}</TableCell>;
                } else {
                    return <TableCell></TableCell>;
                }
            })}</TableRow>;
        });

        const content = <div className={classes.subTableContainer}><Table><TableBody>{tableRows}</TableBody></Table></div>;

        return <TableBody><TableRow><TableCell colSpan={head.props.children.length} style={{ padding: 0 }}>{content}</TableCell></TableRow></TableBody>;
    }

    render() {
        const { classes, className, children, data } = this.props;

        this.count = data == null ? 0 : data.length;
        this.rows = data == null ? [] : data;

        var topBar = null;
        var tableHead = null;
        var tableBody = null;
        var bottomBar = null;

        if (children != null) {
            (Array.isArray(children) ? children : [children]).forEach((n) => {
                if (n.type.name === TopBar.name) {
                    topBar = this.parseTopBar(n);
                } else if (n.type.name === BottomBar.name) {
                    bottomBar = this.parseBottomBar(n);
                } else if (n.type.name === Columns.name) {
                    tableHead = this.parseTableHead(n);
                    tableBody = this.parseTableBody(n);
                }
            });
        }

        var tableFooter =
            <TableFooter>
                {bottomBar == null ? null : <TableRow>{bottomBar}</TableRow>}
                <TableRow>
                    <TablePagination
                        count={this.count}
                        page={this.page}
                        rowsPerPage={this.rowsPerPage}
                        Actions={TablePaginationActions}
                        onChangePage={this.onChangePage}
                        onChangeRowsPerPage={this.onChangeRowsPerPage}
                    />
                </TableRow>
            </TableFooter>;

        return (
            <Paper className={classNames(classes.root, className)}>
                {topBar}
                <Paper className={classes.headPaper} elevation={0}>
                    <Table>
                        {tableHead}
                    </Table>
                </Paper>
                <Paper className={classes.bodyPaper}>
                    <Table>
                        {tableBody}
                    </Table>
                </Paper>
                <Paper className={classes.footerPaper}>
                    <Table>
                        {tableFooter}
                    </Table>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(GridPanel);