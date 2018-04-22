import React from 'react';
import {
    withStyles, GridPanel, TopBar, SearchForm, Columns, Column, CheckboxColumn, RowNumber,
    Button, TextField, Add, Edit, InfoOutline, Search, Delete
} from '../../../components/Components';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

const roleDatas = [{
    id: 1,
    code: 'superadmin',
    name: '超级管理员',
    status: '启用'
}, {
    id: 2,
    code: 'test',
    name: '测试',
    status: '启用'
}, {
    id: 3,
    code: 'manager',
    name: '经理',
    status: '启用'
}];

class RoleList extends React.Component {

    state = {
        searchOpen: false
    };

    onSearchClick = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    }

    render() {
        const { classes } = this.props;
        const state = this.state;

        return (
            <GridPanel className={classes.root} data={roleDatas} paging={true} searchOpen={state.searchOpen}>
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
                        <InfoOutline />
                        查看
                    </Button>
                    <Button onClick={this.onSearchClick}>
                        <Search />
                        查询
                    </Button>
                    <Button>
                        <Delete />
                        删除
                    </Button>
                </TopBar>
                <SearchForm>
                    <TextField label={'角色'} />
                    <Button>搜索</Button>
                    <Button>重置</Button>
                </SearchForm>
                <Columns>
                    <CheckboxColumn width={60} />
                    <RowNumber width={60} />
                    <Column name={'code'}>编码</Column>
                    <Column name={'name'}>名称</Column>
                    <Column name={'status'}>状态</Column>
                </Columns>
            </GridPanel>
        );
    }
}

export default withStyles(styles)(RoleList);