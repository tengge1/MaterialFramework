import {
    Home,
    Person,
    Face,
    Widgets,
    Computer,
    Build
} from 'material-ui-icons';

const appRoutes = [
    {
        id: 1,
        name: '常用组件',
        path: '',
        icon: Widgets,
        children: [
            {
                id: '11',
                name: '按钮',
                path: '/demo/buttons'
            }, {
                id: '12',
                name: '工具栏',
                path: '/demo/toolbars'
            }, {
                id: '13',
                name: '面板',
                path: '/demo/cards'
            }, {
                id: '14',
                name: '表单',
                path: '/demo/forms'
            }, {
                id: '15',
                name: '表格',
                path: '/demo/buttons'
            }, {
                id: '16',
                name: '小组件',
                path: '/demo/buttons'
            }
        ]
    }, {
        id: 2,
        name: '常用页面',
        path: '',
        icon: Computer,
        children: [
            {
                id: 21,
                name: "组织机构管理",
                path: '/system/depart',
                icon: Home
            }, {
                id: 22,
                name: "用户管理",
                path: '/system/user',
                icon: Person
            }, {
                id: 23,
                name: '角色管理',
                path: '/system/role',
                icon: Face
            }
        ]
    }, {
        id: 2,
        name: '皮肤编辑器',
        path: '',
        icon: Build
    }
];

export default appRoutes;
