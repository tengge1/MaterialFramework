import Buttons from './Demo/Buttons.jsx';
import Toolbars from './Demo/Toolbars.jsx';
import Cards from './Demo/Cards.jsx';
import Forms from './Demo/Forms.jsx';
import UserList from './System/User/UserList.jsx';
import RoleList from './System/Role/RoleList.jsx';

const Views = [
    {
        path: '/demo/buttons',
        component: Buttons
    }, {
        path: '/demo/toolbars',
        component: Toolbars
    }, {
        path: '/demo/cards',
        component: Cards
    }, {
        path: '/demo/forms',
        component: Forms
    }, {
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
    }
];

export default Views;
