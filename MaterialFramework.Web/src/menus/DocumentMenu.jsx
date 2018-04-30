import { Widgets } from '../components/Icons';

const DocumentMenu = [{
    id: 1,
    name: '简介',
    path: '/document/description',
    icon: Widgets
}, {
    id: 2,
    name: '使用指南',
    path: '',
    icon: Widgets,
    children: [{
        id: 21,
        name: '开始使用'
    }, {
        id: 22,
        name: '控件分类'
    }]
}, {
    id: 3,
    name: '简单控件',
    path: '',
    icon: Widgets
}, {
    id: 4,
    name: '复合控件',
    path: '',
    icon: Widgets
}, {
    id: 5,
    name: '工具控件',
    path: '',
    icon: Widgets
}];

export default DocumentMenu;
