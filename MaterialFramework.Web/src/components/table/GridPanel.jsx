import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'material-ui';
import Card from '../card/Card';
import CardActions from '../card/CardActions';
import CardContent from '../card/CardContent';
import Checkbox from '../form/Checkbox';
import Table from './Table';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableRow from './TableRow';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TablePagination from './TablePagination';
import TopBar from '../placeholder/TopBar';
import BottomBar from '../placeholder/Placeholder';
import Columns from '../placeholder/Columns';
import Column from '../placeholder/Column';

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
        // n.props.children.forEach(function (m) {
        //     m.props.size = 'small';
        // });
        return <CardActions>{n.props.children}</CardActions>;
    }

    parseBottomBar = (n) => {

    }

    parseColumns = (n) => {

    }

    render() {
        const { classes, className, children, ...others } = this.props;

        var topBar = null;
        var columns = null;
        var bottomBar = null;

        if (children != null && Array.isArray(children)) {
            children.forEach((n) => {
                if (n.type.name === 'TopBar') {
                    topBar = this.parseTopBar(n);
                } else if (n.type.name === 'BottomBar') {
                    bottomBar = this.parseBottomBar(n);
                } else if (n.type.name === 'Columns') {
                    columns = this.parseColumns(n);
                }
            });
        } else if (children != null && !Array.isArray(children)) {
            if (children.type.name === 'TopBar') {
                topBar = this.parseTopBar(children);
            } else if (children.type.name === 'BottomBar') {
                bottomBar = this.parseBottomBar(children);
            } else if (children.type.name === 'Columns') {
                columns = this.parseColumns(children);
            }
        }

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
                <TableRow hover={true} selected={true}>
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
            <Card raised={true} className={classNames(classes.root, className)}>
                {topBar}
                <Table className={classes.table}>
                    {tableHead}
                    {tableBody}
                    {tableFooter}
                </Table>
            </Card>
        );
    }
}

export default withStyles(styles)(GridPanel);