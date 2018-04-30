import React from 'react';
import {
    DataTable, TopBar, SearchForm, Columns, Column, CheckboxColumn, RowNumber,
    Button, TextField, Controller
} from '../../../components/Components';
import { Add, Edit, InfoOutline, Search, Delete } from '../../../components/Icons';
import RoleListController from './RoleListController';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class RoleList extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <DataTable className={classes.root} data={this.roleDatas} paging={true} searchOpen={this.state.searchOpen}>
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
            </DataTable>
        );
    }
}

export default Controller(RoleList, { styles: styles, controller: RoleListController });