import { Description, LibraryBooks, Widgets, Dashboard, Build } from '../components/Icons';

const DocumentMenu = [{
    id: 1,
    name: '简介',
    path: '/document/description',
    icon: Description
}, {
    id: 2,
    name: '使用指南',
    path: '/document/userguide',
    icon: LibraryBooks,
    children: [{
        id: 21,
        name: '开始使用',
        path: '/document/userguide/getStarted'
    }, {
        id: 22,
        name: '控件类型',
        path: '/document/userguide/componentTypes'
    }]
}, {
    id: 3,
    name: '简单控件',
    path: '/document/widget',
    icon: Widgets,
    children: [{
        id: 31,
        name: 'Avatar',
        path: '/document/widget/avatar'
    }]
}, {
    id: 4,
    name: '组合控件',
    path: '/document/components',
    icon: Dashboard
}, {
    id: 5,
    name: '工具控件',
    path: '/document/tool',
    icon: Build
}];

export default DocumentMenu;
