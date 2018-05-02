
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

class LogListController {
    state = {
        searchOpen: false,
        viewOpen: false
    };

    logDatas = logDatas;

    onSearchClick() {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    };

    onViewClick() {

    };

    handleSelectChange(rows) {
        console.log(rows);
    };

    handleRowDblClick(row) {
        this.setState({
            viewOpen: true
        });
    };

    handleViewClose() {
        this.setState({
            viewOpen: false
        })
    };
}

export default LogListController;