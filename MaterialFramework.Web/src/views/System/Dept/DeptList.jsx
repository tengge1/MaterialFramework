import React from 'react';
import { Controller } from '../../../components/Components';
import { KeyboardArrowRight, KeyboardArrowDown } from '../../../components/Icons';

const styles = theme => ({
    root: {

    },
    list: {
        listStyle: 'none'
    },
    item: {
        display: 'flex'
    }
});

class DeptList extends React.Component {
    render() {
        const { classes } = this.props;

        return <ul className={classes.list}>
            <li className={classes.item}>
                <KeyboardArrowDown />
                <a>公司一</a>
                <ul className={classes.list}>
                    <li className={classes.item}>
                        <KeyboardArrowDown />
                        <a>部门一</a>
                        <ul className={classes.list}>
                            <li><span></span><a>小组一</a></li>
                            <li><a>小组二</a></li>
                            <li><a>小组三</a></li>
                        </ul>
                    </li>
                    <li>部门二</li>
                    <li>部门三</li>
                </ul>
            </li>
            <li className={classes.item}>
                <KeyboardArrowRight />
                <a>公司二</a>
            </li>
        </ul>;
    }
}

export default Controller(DeptList, { styles: styles });