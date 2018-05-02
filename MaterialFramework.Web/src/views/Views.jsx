import Description from './Document/Description';
import AvatarComponent from './Document/SimpleComponent/AvatarComponent';

import DeptList from './System/Dept/DeptList';
import UserList from './System/User/UserList';
import RoleList from './System/Role/RoleList';
import LogList from './System/Log/LogList';

const DocumentViews = [{
    path: '/document/description',
    component: Description
}, {
    path: '/document/simpleComponent/avatar',
    component: AvatarComponent
}];

const SystemViews = [{
    path: '/',
    component: null
}, {
    path: '/system/dept',
    component: DeptList
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

const Views = DocumentViews.concat(SystemViews);

export default Views;
