import React from 'react';
import {
    With, Tree, Card, AppBar, Toolbar, CardActions, IconButton,
    FormControl, FormLabel, Input, Button
} from '../../../components/Components';
import { Add, Delete } from '../../../components/Icons';
import DicListController from './DicListController';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    leftPanel: {
        width: 250,
        height: '100%'
    },
    tree: {
        '-webkit-padding-start': '15px',
        '-webkit-margin-before': '0'
    },
    rightPanel: {
        flex: 1,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    editForm: {
        width: 280,
        height: 400
    },
    rightAction: {
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightBtn: {
        margin: 5
    }
});

class DicList extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <Card className={classes.leftPanel}>
                <AppBar>
                    <Toolbar>用户字典</Toolbar>
                </AppBar>
                <CardActions>
                    <IconButton title={'添加'}>
                        <Add />
                    </IconButton>
                    <IconButton title={'删除'}>
                        <Delete />
                    </IconButton>
                </CardActions>
                <Tree data={this.dicData} className={classes.tree} />
            </Card>
            <div className={classes.rightPanel}>
                <div className={classes.editForm}>
                    <FormControl>
                        <FormLabel>上级部门</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>部门编号</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>部门名称</FormLabel>
                        <Input />
                    </FormControl>

                    <div className={classes.rightAction}>
                        <Button color={'primary'} className={classes.rightBtn}>保存</Button>
                        <Button className={classes.rightBtn}>取消</Button>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default With(DicList, { styles: styles, controller: DicListController });