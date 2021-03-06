import React from 'react';
import classNames from 'classnames';
import withStyles from '../style/withStyles.jsx';
import Collapse from '../transition/Collapse.jsx';
import { KeyboardArrowRight, KeyboardArrowDown } from '../icon/Icons.jsx';

const styles = theme => ({
    root: {

    },
    list: {
        listStyle: 'none',
        paddingStart: 24,
        '-webkit-padding-start': 24
    },
    item: {
        minHeight: 24
    },
    arrow: {
        verticalAlign: 'middle'
    },
    a: {
        color: theme.palette.text.primary,
        textDecoration: 'none'
    },
    leafNode: {
        marginLeft: 24
    }
});

class Tree extends React.Component {
    constructor(props) {
        super(props);

        const { data } = props;
        var expanded = {};

        var getExpanded = (node) => {
            if (node.expanded) {
                expanded[node.id] = true;
            }
            if (node.children && node.children.length > 0) {
                node.children.forEach((child) => {
                    getExpanded(child);
                });
            }
        };
        getExpanded({
            id: 0,
            text: '',
            children: data
        });

        this.state = {
            expand: expanded
        };
    }

    toggleExpandNode = (treeNodeId) => {
        var expand = this.state.expand;
        expand[treeNodeId] = expand[treeNodeId] === true ? false : true;
        this.setState({
            expand: expand
        });
    }

    render() {
        const { data, classes, className, ...others } = this.props;

        return <ul className={classNames(classes.list, className)} {...others}>
            {data.map((n) => {
                return this.renderNode(n);
            })}
        </ul>;
    }

    renderNode(item) {
        const { classes } = this.props;
        const { expand } = this.state;
        const leaf = item.children == null || item.children.length === 0;

        if (leaf) {
            return <li key={item.id} className={classes.item}>
                {leaf ? null : <KeyboardArrowRight className={classes.arrow} />}
                <a href="javascript:;" className={leaf ? classNames(classes.a, classes.leafNode) : classes.a}>{item.text}</a>
            </li >;
        } else {
            return <li key={item.id} className={classes.item}>
                {expand[item.id] === true ?
                    <KeyboardArrowDown className={classes.arrow} /> :
                    <KeyboardArrowRight className={classes.arrow} />}
                <a href="javascript:;" className={classes.a} onClick={this.toggleExpandNode.bind(this, item.id)}>{item.text}</a>
                <Collapse in={expand[item.id] === true ? true : false}>
                    <ul className={classes.list}>
                        {item.children.map((n) => {
                            return this.renderNode(n);
                        })}
                    </ul>
                </Collapse>
            </li>;
        }
    }
}

export default withStyles(styles)(Tree);