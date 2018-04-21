import Buttons from './Demo/Buttons';
import Toolbars from './Demo/Toolbars';
import Cards from './Demo/Cards';
import Forms from './Demo/Forms';
import Tables from './Demo/Tables';
import Progresses from './Demo/Progresses';
import Widgets from './Demo/Widgets';
import UserList from './System/User/UserList';
import RoleList from './System/Role/RoleList';

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
        path: '/demo/tables',
        component: Tables
    }, {
        path: '/demo/progresses',
        component: Progresses
    }, {
        path: '/demo/widgets',
        component: Widgets
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
