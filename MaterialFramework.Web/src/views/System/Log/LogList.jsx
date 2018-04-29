import React from 'react';
import {
    withStyles, DataTable, TopBar, SearchForm, Columns, Column, CheckboxColumn, RowNumber,
    Button, TextField
} from '../../../components/Components';
import { InfoOutline, Search, Delete } from '../../../components/Icons';
import LogView from './LogView';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

const logData = [{
    id: 3,
    time: '2018-03-02 14:05:06',
    title: '用户test注销',
    type: '用户事件',
    source: 'Web应用',
    level: '消息',
    user: '测试人员',
    ip: '192.168.1.3',
    comment: ''
}, {
    id: 2,
    time: '2018-03-02 13:45:06',
    title: '用户test登录',
    type: '用户事件',
    source: 'Web应用',
    level: '消息',
    user: '测试人员',
    ip: '192.168.1.3',
    comment: ''
}, {
    id: 1,
    time: '2018-03-01 20:12:15',
    title: '用户admin登录',
    type: '用户事件',
    source: 'Web应用',
    level: '消息',
    user: '系统管理员',
    ip: '127.0.0.1',
    comment: ''
}, {
    id: 0,
    time: '2018-03-01 10:20:43',
    title: '系统启动',
    type: '系统事件',
    source: 'Web应用',
    level: '消息',
    user: '系统',
    ip: '127.0.0.1',
    comment: ''
}];

var logDatas = [];
for (var i = 0; i < 100; i++) {
    var data = Object.assign({}, logData[i % 4]);
    data.id = i;
    logDatas.push(data);
}

class LogList extends React.Component {

    state = {
        searchOpen: false,
        viewOpen: false
    };

    onSearchClick = () => {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    };

    onViewClick = () => {

    };

    handleSelectChange = (rows) => {
        console.log(rows);
    };

    handleRowDblClick = (row) => {
        this.setState({
            viewOpen: true
        });
    };

    handleViewClose = () => {
        this.setState({
            viewOpen: false
        })
    };

    render() {
        const { classes } = this.props;
        const state = this.state;

        return <React.Fragment>
            <DataTable
                className={classes.root}
                data={logDatas}
                paging={true}
                searchOpen={state.searchOpen}
                onSelectChange={this.handleSelectChange}
                onDoubleClick={this.handleRowDblClick}>
                <TopBar>
                    <Button onClick={this.onViewClick}>
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
            <LogView open={state.viewOpen} onClose={this.handleViewClose} />
        </React.Fragment>;
    }
}

export default withStyles(styles)(LogList);