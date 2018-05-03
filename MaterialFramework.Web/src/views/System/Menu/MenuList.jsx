import React from 'react';
import {
    Controller, Tree, Card, AppBar, Toolbar, CardActions, IconButton,
    FormControl, FormLabel, Input, Button
} from '../../../components/Components';
import { Add, Delete } from '../../../components/Icons';
import MenuListController from './MenuListController';

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

class MenuList extends React.Component {
    render() {
        const { classes } = this.props;

        return <div className={classes.root}>
            <Card className={classes.deptPanel}>
                <AppBar>
                    <Toolbar>系统菜单</Toolbar>
                </AppBar>
                <CardActions>
                    <IconButton title={'添加'}>
                        <Add />
                    </IconButton>
                    <IconButton title={'删除'}>
                        <Delete />
                    </IconButton>
                </CardActions>
                <Tree data={this.menuData} className={classes.tree} />
            </Card>
            <div className={classes.rightPanel}>
                <div className={classes.editForm}>
                    <FormControl>
                        <FormLabel>上级菜单</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>菜单编号</FormLabel>
                        <Input />
                    </FormControl>
                    <FormControl>
                        <FormLabel>菜单名称</FormLabel>
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

export default Controller(MenuList, { styles: styles, controller: MenuListController });