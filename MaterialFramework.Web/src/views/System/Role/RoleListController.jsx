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

class RoleListController {
    state = {
        searchOpen: false
    };

    roleDatas = roleDatas;

    onSearchClick() {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    }
}

export default RoleListController;