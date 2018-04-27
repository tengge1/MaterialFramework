import {
    Home,
    Person,
    Build,
    Group
} from '../components/Components';
import { Menu, Book, Assignment } from 'material-ui-icons';

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
}, {
    id: 4,
    name: '菜单管理',
    path: '',
    icon: Menu
}, {
    id: 4,
    name: '用户字典',
    path: '',
    icon: Book
}, {
    id: 5,
    name: '日志管理',
    path: '',
    icon: Assignment
}];

export default appRoutes;
