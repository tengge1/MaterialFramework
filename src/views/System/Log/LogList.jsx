import React from 'react';
import {
    DataTable, TopBar, SearchForm, Columns, Column, CheckboxColumn, RowNumber,
    Button, TextField, With
} from '../../../components/Components';
import { InfoOutline, Search, Delete } from '../../../components/Icons';
import LogListController from './LogListController';
import LogView from './LogView';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class LogList extends React.Component {
    render() {
        const { classes } = this.props;
        const state = this.state;

        return <React.Fragment>
            <DataTable
                className={classes.root}
                data={this.logDatas}
                paging={true}
                searchOpen={state.searchOpen}
                onSelectChange={this.handleSelectChange.bind(this)}
                onDoubleClick={this.handleRowDblClick.bind(this)}>
                <TopBar>
                    <Button onClick={this.onViewClick.bind(this)}>
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
                    <TextField label={'标题'} />
                    <Button>搜索</Button>
                    <Button>重置</Button>
                </SearchForm>
                <Columns>
                    <CheckboxColumn width={60} />
                    <RowNumber width={60} />
                    <Column name={'time'} width={150}>时间</Column>
                    <Column name={'title'} width={180}>标题</Column>
                    <Column name={'type'}>类型</Column>
                    <Column name={'source'}>来源</Column>
                    <Column name={'level'}>等级</Column>
                    <Column name={'user'}>用户</Column>
                    <Column name={'ip'}>IP地址</Column>
                    <Column name={'comment'} width={150}>备注</Column>
                </Columns>
            </DataTable >
            <LogView open={state.viewOpen} onClose={this.handleViewClose.bind(this)} />
        </React.Fragment>;
    }
}

export default With(LogList, { styles: styles, controller: LogListController });