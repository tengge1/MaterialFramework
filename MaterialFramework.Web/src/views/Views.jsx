import UserList from './System/User/UserList';
import RoleList from './System/Role/RoleList';

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
}];

export default Views;
