import {
    Home,
    Person,
    Build,
    Group
} from '../components/Components';

const appRoutes = [{
    id: 1,
    name: '组织机构管理',
    path: '',
    icon: Home
}, {
    id: 2,
    name: '用户管理',
    path: '/system/user',
    icon: Person
}, {
    id: 3,
    name: '权限管理',
    path: '',
    icon: Build,
    children: [{
        id: 31,
        name: '角色管理',
        path: '/system/role',
        icon: Group
    }]
}];

export default appRoutes;
