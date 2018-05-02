import React from 'react';
import { Controller, Tree, Card, AppBar, Toolbar, CardContent, CardActions, IconButton } from '../../../components/Components';
import { Add, Delete } from '../../../components/Icons';
import DeptListController from './DeptListController';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    deptPanel: {
        width: 250,
        height: '100%'
    },
    action: {
        padding: 3
    },
    tree: {
        '-webkit-padding-start': '15px',
        '-webkit-margin-before': '0'
    }
});

class DeptList extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <Card className={classes.deptPanel}>
                <AppBar>
                    <Toolbar>组织机构</Toolbar>
                </AppBar>
                <CardActions className={classes.action}>
                    <IconButton title={'添加'}>
                        <Add />
                    </IconButton>
                    <IconButton title={'删除'}>
                        <Delete />
                    </IconButton>
                </CardActions>
                <Tree data={this.deptData} className={classes.tree} />
            </Card>
        </div>;
    }
}

export default Controller(DeptList, { styles: styles, controller: DeptListController });