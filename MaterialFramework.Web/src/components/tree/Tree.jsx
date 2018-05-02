import React from 'react';
import withStyles from '../style/withStyles';
import { KeyboardArrowRight, KeyboardArrowDown } from '../icon/Icons';

const styles = theme => ({
    root: {

    },
    list: {
        listStyle: 'none'
    },
    item: {

    },
    arrow: {
        verticalAlign: 'middle'
    }
});

class Tree extends React.Component {
    render() {
        const { data, classes } = this.props;

        return <ul className={classes.list}>
            {data.map((n) => {
                return this.renderNode(n);
            })}
        </ul>;
    }

    renderNode(item) {
        const { classes } = this.props;

        if (item.children == null || item.children.length === 0) {
            return <li key={item.id}>
                <KeyboardArrowRight className={classes.arrow} />
                <a href="javascript:;">{item.text}</a>
            </li>;
        } else {
            return <li key={item.id}>
                <KeyboardArrowDown className={classes.arrow} />
                <a href="javascript:;">{item.text}</a>
                <ul className={classes.list}>
                    {item.children.map((n) => {
                        return this.renderNode(n);
                    })}
                </ul>
            </li>;
        }
    }
}

export default withStyles(styles)(Tree);