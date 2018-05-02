import React from 'react';
import { Controller, Tree } from '../../../components/Components';

const deptData = [{
    id: 1,
    text: '公司一',
    children: [{
        id: 3,
        text: '部门一',
        children: [{
            id: 6,
            text: '小组一'
        }, {
            id: 7,
            text: '小组二'
        }, {
            id: 8,
            text: '小组三'
        }]
    }, {
        id: 4,
        text: '部门二'
    }, {
        id: 5,
        text: '部门三'
    }]
}, {
    id: 2,
    text: '公司二'
}]

const styles = theme => ({
    root: {

    }
});

class DeptList extends React.Component {
    render() {
        return <Tree data={deptData} />;
    }
}

export default Controller(DeptList, { styles: styles });