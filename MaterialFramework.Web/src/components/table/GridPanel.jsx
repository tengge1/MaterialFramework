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
import SearchForm from '../placeholder/SearchForm';
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

    idProperty = 'id';

    rowsPerPage = 10; // 每页的行数
    page = 0; // 第几页（从0开始计数）
    count = 0; // 记录总条数
    rows = []; // 每行的数据
    selected = []; // 当前选中的记录id

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

    onSelectAllClick = (event, checked) => {
        const rows = this.rows.slice(this.rowsPerPage * this.page, this.rowsPerPage * (this.page + 1));

        if (checked) {
            rows.forEach((n) => {
                if (this.selected.indexOf(n[this.idProperty]) === -1) {
                    this.selected.push(n[this.idProperty]);
                }
            });
        } else {
            this.selected = [];
        }
        this.refresh();
    }

    onSelectClick = (event, checked, id) => {
        if (checked) {
            if (this.selected.indexOf(id) === -1) {
                this.selected.push(id);
            } else {
                throw new Error('GridPanel: duplicate selected id.');
            }
        } else {
            var index = this.selected.indexOf(id);
            if (index > -1) {
                this.selected.splice(index, 1);
            }
        }
        this.refresh();
    }

    parseTopBar = (n) => {
        return n.props.children;
    }

    parseBottomBar = (n) => {
        return n.props.children;
    }

    parseSearchForm = (n) => {
        return n.props.children;
    }

    parseTableHead = (head) => {
        const rows = this.rows.slice(this.rowsPerPage * this.page, this.rowsPerPage * (this.page + 1));

        var totalWidth = 0;
        head.props.children.forEach((n) => {
            if (n.props.width) {
                totalWidth += n.props.width;
            } else {
                totalWidth += 100;
            }
        });

        const headRow = <TableRow>{head.props.children.map((n, index) => {
            const width = n.props.width ? n.props.width : 100;
            if (n.type.name === CheckboxColumn.name) {
                return <TableCell
                    width={parseInt(width / totalWidth * 100, 10) + '%'}
                    padding={'checkbox'}
                    key={index}>
                    <Checkbox
                        indeterminate={this.selected.length > 0 && this.selected.length < rows.length}
                        checked={this.selected.length > 0 && this.selected.length === rows.length}
                        onChange={this.onSelectAllClick} />
                </TableCell>;
            } else if (n.type.name === RowNumber.name) {
                return <TableCell
                    width={parseInt(width / totalWidth * 100, 10) + '%'}
                    padding={'checkbox'}
                    key={index}></TableCell>;
            } else if (n.type.name === Column.name) {
                return <TableCell
                    width={parseInt(width / totalWidth * 100, 10) + '%'}
                    key={index}>
                    {n.props.children}
                </TableCell>;
            } else {
                return <TableCell
                    width={parseInt(width / totalWidth * 100, 10) + '%'}
                ></TableCell>;
            }
        })}</TableRow>;

        return <TableHead>{headRow}</TableHead>;
    }

    parseTableBody = (head) => {
        const { classes } = this.props;

        const rows = this.rows.slice(this.rowsPerPage * this.page, this.rowsPerPage * (this.page + 1));

        var totalWidth = 0;
        head.props.children.forEach((n) => {
            if (n.props.width) {
                totalWidth += n.props.width;
            } else {
                totalWidth += 100;
            }
        });

        const tableRows = rows.map((row, rowIndex) => {
            return <TableRow hover={true} selected={rowIndex % 2 === 0 ? true : false} key={rowIndex}>{head.props.children.map((col, colIndex) => {
                const width = col.props.width ? col.props.width : 100;
                if (col.type.name === CheckboxColumn.name) {
                    return <TableCell
                        width={parseInt(width / totalWidth * 100, 10) + '%'}
                        padding={'checkbox'}
                        key={colIndex}>
                        <Checkbox
                            checked={this.selected.indexOf(row[this.idProperty]) > -1}
                            onChange={(event, checked) => this.onSelectClick(event, checked, row[this.idProperty])} />
                    </TableCell>;
                } else if (col.type.name === RowNumber.name) {
                    return <TableCell
                        width={parseInt(width / totalWidth * 100, 10) + '%'}
                        padding={'checkbox'}
                        key={colIndex}>
                        {this.rowsPerPage * this.page + rowIndex + 1}
                    </TableCell>;
                } else if (col.type.name === Column.name) {
                    return <TableCell
                        width={parseInt(width / totalWidth * 100, 10) + '%'}
                        key={colIndex}>
                        {row[col.props.name]}
                    </TableCell>;
                } else {
                    return <TableCell
                        width={parseInt(width / totalWidth * 100, 10) + '%'}
                    ></TableCell>;
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
        var searchForm = null;
        var tableBody = null;
        var bottomBar = null;

        if (children != null) {
            (Array.isArray(children) ? children : [children]).forEach((n) => {
                if (n.type.name === TopBar.name) {
                    topBar = this.parseTopBar(n);
                } else if (n.type.name === BottomBar.name) {
                    bottomBar = this.parseBottomBar(n);
                } else if (n.type.name === SearchForm.name) {
                    searchForm = this.parseSearchForm(n);
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
                <CardActions>
                    {topBar}
                </CardActions>
                <CardActions>
                    {searchForm}
                </CardActions>
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
                <Paper className={classes.footerPaper} elevation={1}>
                    <Table>
                        {tableFooter}
                    </Table>
                </Paper>
            </Paper>
        );
    }
}

export default withStyles(styles)(GridPanel);