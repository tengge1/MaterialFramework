
const userData = [{
    id: 1,
    username: 'admin',
    name: '管理员',
    sex: '男',
    role: '超级管理员',
    phone: '12345678',
    imei: '61111111111'
}, {
    id: 2,
    username: 'test',
    name: '测试',
    sex: '女',
    role: '超级管理员',
    phone: '8888888888',
    imei: '3337777777'
}, {
    id: 3,
    username: 'wang',
    name: '王总',
    sex: '男',
    role: '经理',
    phone: '666666666',
    imei: '55555552'
}, {
    id: 4,
    username: 'liu',
    name: '刘经理',
    sex: '男',
    role: '经理',
    phone: '99996666',
    imei: 'fdfd'
}];

var userDatas = [];
for (var i = 0; i < 256; i++) {
    var user = Object.assign({}, userData[i % userData.length]);
    user.id = i + 1;
    user.username = user.username + (parseInt(i / userData.length, 10) + 1);
    user.name = user.name + (parseInt(i / userData.length, 10) + 1);
    userDatas.push(user);
}

class UserListController {

    state = {
        searchOpen: false,
        userAddOpen: false,
        userEditOpen: false
    };

    userDatas = userDatas;

    onSearchClick() {
        this.setState({
            searchOpen: !this.state.searchOpen
        });
    }

    addUser() {
        this.setState({
            userAddOpen: !this.state.userAddOpen
        });
    };
}

export default UserListController;