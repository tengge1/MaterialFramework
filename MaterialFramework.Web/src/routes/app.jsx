import {Dashboard, Home, Person, Face, Notifications} from 'material-ui-icons';

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
                path: '/system/depart',
                icon: Home
            }, {
                id: 12,
                name: "用户管理",
                path: '/system/user',
                icon: Person
            }, {
                id: 13,
                name: '角色管理',
                path: '/system/role',
                icon: Face
            }
        ]
    }, {
        id: 2,
        name: 'Demo',
        path: '',
        icon: Notifications,
        children: [
            {
                id: '21',
                name: '组件',
                path: '/demo/component'
            }
        ]
    }
];

export default appRoutes;
