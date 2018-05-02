import React from 'react';
import { Controller } from '../../../components/Components';
import { KeyboardArrowRight, KeyboardArrowDown } from '../../../components/Icons';

const styles = theme => ({
    root: {

    },
    arrowRight: {
        listStyle: `url(${KeyboardArrowRight})`
    },
    arrowDown: {
        listStyle: `url(${KeyboardArrowDown})`
    }
});

class DeptList extends React.Component {
    render() {
        const { classes } = this.props;

        return <ul>
            <li>
                <a>公司一</a>
                <ul className={classes.arrowDown}>
                    <li>
                        <a>部门一</a>
                        <ul>
                            <li><a>小组一</a></li>
                            <li><a>小组二</a></li>
                            <li><a>小组三</a></li>
                        </ul>
                    </li>
                    <li>部门二</li>
                    <li>部门三</li>
                </ul>
            </li>
            <li>
                <a>公司二</a>
            </li>
        </ul>;
    }
}

export default Controller(DeptList, { styles: styles });