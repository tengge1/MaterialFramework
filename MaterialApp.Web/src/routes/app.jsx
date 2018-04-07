import {Dashboard, Home, Person, Face, Notifications} from 'material-ui-icons';
import UserList from '../views/System/User/UserList.jsx';

const appRoutes = [
    {
        id: 1,
        name: '权限管理',
        path: '',
        icon: Dashboard,
        children: [
            {
                id: 11,
                name: "组织机构管理",
                path: '/depart',
                icon: Home,
                component: UserList
            }, {
                id: 12,
                name: "用户管理",
                path: '/user',
                icon: Person,
                component: UserList
            }, {
                id: 13,
                name: '角色管理',
                path: '/role',
                icon: Face,
                component: UserList
            }
        ]
    }, {
        id: 2,
        name: '通知公告',
        path: "/notifications",
        icon: Notifications,
        component: UserList
    }
];

export default appRoutes;
