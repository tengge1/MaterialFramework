const dicData = [{
    id: 1,
    text: '用户字典',
    children: [{
        id: 11,
        text: '请假类型',
        children: [{
            id: 121,
            text: '年薪假'
        }, {
            id: 122,
            text: '因公外出'
        }, {
            id: 123,
            text: '因公开会'
        }, {
            id: 124,
            text: '病假'
        }, {
            id: 125,
            text: '事假'
        }]
    }]
}, {
    id: 2,
    text: '系统字典',
    children: [{
        id: 21,
        text: '性别'
    }]
}];

class DicListController {
    dicData = dicData;
}

export default DicListController;