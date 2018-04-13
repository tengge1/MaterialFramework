import UserList from './System/User/UserList.jsx';
import RoleList from './System/Role/RoleList.jsx';

const Views = [
    {
        path: '/',
        component: null
    }, {
        path: '/system/depart',
        component: null
    }, {
        path: '/system/user',
        component: UserList
    }, {
        path: '/system/role',
        component: RoleList
    }, {
        path: "/system/message",
        component: null
    }
];

export default Views;
