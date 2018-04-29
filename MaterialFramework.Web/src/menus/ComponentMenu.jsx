import { Home, Person, Build, Group, Menu, Book, Assignment } from '../components/Icons';

const ComponentMenu = [{
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
}, {
    id: 4,
    name: '菜单管理',
    path: '',
    icon: Menu
}, {
    id: 5,
    name: '用户字典',
    path: '',
    icon: Book
}, {
    id: 6,
    name: '系统日志',
    path: '/system/log',
    icon: Assignment
}];

export default ComponentMenu;
