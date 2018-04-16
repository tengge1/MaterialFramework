import UserList from './System/User/UserList.jsx';
import RoleList from './System/Role/RoleList.jsx';
import Buttons from './Demo/Buttons.jsx';

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
        path: '/demo/buttons',
        component: Buttons
    }
];

export default Views;
