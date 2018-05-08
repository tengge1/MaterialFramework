const deptData = [{
    id: 1,
    text: '中国石油集团',
    expanded: true,
    children: [{
        id: 3,
        text: '大庆油田分公司',
        expanded: true,
        children: [{
            id: 6,
            text: '采油1队',
            expanded: true
        }, {
            id: 7,
            text: '采油2队',
            expanded: true
        }, {
            id: 8,
            text: '采油3队',
            expanded: true
        }]
    }, {
        id: 4,
        text: '胜利油田分公司',
        expanded: true
    }, {
        id: 5,
        text: '江苏油田分公司',
        expanded: true
    }]
}];

class DeptListController {
    state = {
        deptAddOpen: false
    };

    deptData = deptData;

    handleAddClick() {
        this.setState({
            deptAddOpen: true
        });
    }

    handleDeptAddClose() {
        this.setState({
            deptAddOpen: false
        });
    }
}

export default DeptListController;