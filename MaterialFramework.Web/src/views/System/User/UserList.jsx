import React from 'react';
import { withStyles, GridPanel, TopBar, BottomBar, Columns, Column, Button, Add, Edit, Search, Delete } from '../../../components/Components';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

const userData = [{
    id: 1,
    username: 'admin',
    name: '管理员',
    sex: '男',
    phone: '12345678',
    imei: '61111111111'
}, {
    id: 2,
    username: 'test',
    name: '测试',
    sex: '女',
    phone: '8888888888',
    imei: '3337777777'
}, {
    id: 3,
    username: 'wang',
    name: '王总',
    sex: '男',
    phone: '666666666',
    imei: '55555552'
}];

class UserList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <GridPanel className={classes.root} data={userData}>
                <TopBar>
                    <Button>
                        <Add />
                        添加
                    </Button>
                    <Button>
                        <Edit />
                        编辑
                    </Button>
                    <Button>
                        <Search />
                        查询
                    </Button>
                    <Button>
                        <Delete />
                        删除
                    </Button>
                </TopBar>
                <Columns>
                    <Column checkbox={true}></Column>
                    <Column name={'username'}>用户名</Column>
                    <Column name={'name'}>姓名</Column>
                    <Column name={'sex'}>性别</Column>
                    <Column name={'phone'}>手机号</Column>
                    <Column name={'imei'}>手机串号</Column>
                </Columns>
                <BottomBar>

                </BottomBar>
            </GridPanel>
        );
    }
}

export default withStyles(styles)(UserList);