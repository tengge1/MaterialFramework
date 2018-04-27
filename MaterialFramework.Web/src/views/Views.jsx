import UserList from './System/User/UserList';
import RoleList from './System/Role/RoleList';
import LogList from './System/Log/LogList';

const Views = [{
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
    path: '/system/log',
    component: LogList
}];

export default Views;
