const menuData = [{
    id: 1,
    text: '开发文档',
    children: [{
        id: 11,
        text: '简介'
    }, {
        id: 12,
        text: '使用指南',
        children: [{
            id: 121,
            text: '开始使用'
        }, {
            id: 122,
            text: '控件分类'
        }]
    }, {
        id: 13,
        text: '简单控件',
        children: [{
            id: 131,
            text: 'Avatar'
        }]
    }, {
        id: 14,
        text: '组合控件'
    }, {
        id: 15,
        text: '工具控件'
    }]
}, {
    id: 2,
    text: '系统管理',
    children: [{
        id: 21,
        text: '组织机构管理'
    }, {
        id: 22,
        text: '用户管理'
    }, {
        id: 23,
        text: '权限管理',
        children: [{
            id: 231,
            text: '角色管理'
        }]
    }, {
        id: 24,
        text: '菜单管理'
    }, {
        id: 25,
        text: '用户字典'
    }, {
        id: 26,
        text: '系统日志'
    }]
}];

class MenuListController {
    menuData = menuData;
}

export default MenuListController;