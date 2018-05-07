import React from 'react';
import {
    DataTable, TopBar, SearchForm, Columns, Column, CheckboxColumn, RowNumber,
    Button, TextField, With
} from '../../../components/Components';
import { Add, Edit, InfoOutline, Search, Delete } from '../../../components/Icons';
import UserListController from './UserListController';
import UserAdd from './UserAdd';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class UserList extends React.Component {
    render() {
        const { classes } = this.props;

        return <React.Fragment>
            <DataTable className={classes.root} data={this.userDatas} paging={true} searchOpen={this.state.searchOpen}>
                <TopBar>
                    <Button onClick={this.addUser.bind(this)}>
                        <Add />
                        添加
                    </Button>
                    <Button>
                        <Edit />
                        编辑
                    </Button>
                    <Button>
                        <InfoOutline />
                        查看
                    </Button>
                    <Button onClick={this.onSearchClick.bind(this)}>
                        <Search />
                        查询
                    </Button>
                    <Button>
                        <Delete />
                        删除
                    </Button>
                </TopBar>
                <SearchForm>
                    <TextField label={'用户名/姓名'} />
                    <Button>搜索</Button>
                    <Button>重置</Button>
                </SearchForm>
                <Columns>
                    <CheckboxColumn width={60} />
                    <RowNumber width={60} />
                    <Column name={'username'}>用户名</Column>
                    <Column name={'name'}>姓名</Column>
                    <Column name={'sex'}>性别</Column>
                    <Column name={'role'}>角色</Column>
                    <Column name={'phone'}>手机号</Column>
                    <Column name={'imei'}>手机串号</Column>
                </Columns>
            </DataTable>
            <UserAdd open={this.state.userAddOpen} />
        </React.Fragment>;
    }
}

export default With(UserList, { styles: styles, controller: UserListController });