import {Dashboard, Home, Person, Face, Notifications} from "material-ui-icons";
import UserProfile from "views/UserProfile/UserProfile.jsx";

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
                component: UserProfile
            }, {
                id: 12,
                name: "用户管理",
                path: '/user',
                icon: Person,
                component: UserProfile
            }, {
                id: 13,
                name: '角色管理',
                path: '/role',
                icon: Face,
                component: UserProfile
            }
        ]
    }, {
        id: 2,
        name: '通知公告',
        path: "/notifications",
        icon: Notifications,
        component: UserProfile
    }
];

export default appRoutes;
