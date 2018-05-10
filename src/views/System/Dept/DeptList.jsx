import React from 'react';
import {
    With, Tree, Card, AppBar, Toolbar, CardActions, FlatButton,
    FormControl, FormLabel, Input, Button, Divider, Select, MenuItem
} from '../../../components/Components';
import { Add, Delete } from '../../../components/Icons';
import DeptListController from './DeptListController';
import DeptAdd from './DeptAdd';

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

class DeptList extends React.Component {
    render() {
        const { classes } = this.props;

        return <React.Fragment>
            <div className={classes.root}>
                <Card className={classes.deptPanel}>
                    <AppBar color={'default'}>
                        <Toolbar>组织机构</Toolbar>
                    </AppBar>
                    <CardActions>
                        <Button size={'small'} onClick={this.handleAddClick.bind(this)}>
                            添加
                        </Button>
                        <Button size={'small'} title={'删除'}>
                            删除
                        </Button>
                    </CardActions>
                    <Divider />
                    <Tree data={this.deptData} className={classes.tree} />
                </Card>
                <div className={classes.rightPanel}>
                    <div className={classes.editForm}>
                        <FormControl>
                            <FormLabel>上级部门</FormLabel>
                            <Select value={this.state.PID} onChange={this.onSelectPDept.bind(this)}>
                                <MenuItem value={1}>中国石油集团</MenuItem>
                                <MenuItem value={2}>大庆油田分公司</MenuItem>
                                <MenuItem value={3}>胜利油田分公司</MenuItem>
                                <MenuItem value={4}>江苏油田分公司</MenuItem>
                            </Select>
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
            </div>
            <DeptAdd open={this.state.deptAddOpen} onClose={this.handleDeptAddClose.bind(this)} />
        </React.Fragment>;
    }
}

export default With(DeptList, { styles: styles, controller: DeptListController });