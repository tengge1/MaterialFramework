import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
    withStyles,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse
} from 'material-ui';
import {ChevronLeft, ChevronRight, ExpandLess, ExpandMore} from 'material-ui-icons';
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import appRoutes from '../../routes/app.jsx';
import {withRoot, drawerWidth} from '../../withRoot';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        overflowX: 'hidden',
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    drawerPaperClose: {
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        width: 50
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    navLink: {
        textDecoration: 'none',
        color: '#555'
    },
    itemClose: {
        height: 54,
        paddingLeft: 12,
        paddingRight: 12,
        overflow: 'hidden'
    },
    itemText: {
        fontSize: '14px',
        lineHeight: '30px'
    }
});

class Sidebar extends React.Component {

    state = {
        open: true,
        expand: []
    };

    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    expand = () => { // 展开侧边栏
        this.setState({open: true});
    };

    collapse = () => { // 关闭侧边栏
        this.setState({open: false, expand: []});
    };

    toggle = () => { // 展开或关闭侧边栏
        if (this.state.open === true) {
            this.collapse();
        } else {
            this.expand();
        }
    };

    expandItem = (id) => { // 展开菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) === -1) {
            expand.push(id);
        }
        this.setState({expand: expand});
    }

    collapseItem = (id) => { // 关闭菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) !== -1) {
            var index = expand.indexOf(id);
            expand.splice(index, 1);
        }
        this.setState({expand: expand});
    }

    toggleItem = (id) => { // 展开或关闭菜单子项
        var expand = this.state.expand;
        if (expand.indexOf(id) === -1) {
            this.expandItem(id);
        } else {
            this.collapseItem(id);
        }
    };

    handleClick = (id, name, path, leaf) => { // 点击菜单子项
        if (leaf) {
            if (this.props && this.props.onItemClick) {
                this
                    .props
                    .onItemClick
                    .call(this, id, name, path);
            }
        } else {
            this.toggleItem(id);
        }
    }

    render() {
        const {classes} = this.props;

        var links = (
            <List component="div" ref={this.ref}>
                {appRoutes.map((prop) => {
                    return (
                        <div key={prop.id}>
                            <ListItem
                                button
                                key={prop.id}
                                className={this.state.open
                                ? ''
                                : classes.itemClose}
                                onClick={this
                                .handleClick
                                .bind(this, prop.id, prop.name, prop.path, prop.children == null || prop.children.length === 0)}>
                                <ListItemIcon>
                                    <prop.icon/>
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.itemText}
                                    disableTypography={true}
                                    primary={prop.name}></ListItemText>
                                {(prop.children != null && prop.children.length > 0) && (this.state.expand.indexOf(prop.id) === -1
                                    ? <ExpandMore/>
                                    : <ExpandLess/>)
}
                            </ListItem>
                            {prop.children && (
                                <Collapse
                                    in={this
                                    .state
                                    .expand
                                    .indexOf(prop.id) > -1}
                                    timeout="auto"
                                    unmountOnExit>
                                    <List component="div" disablePadding>
                                        {prop
                                            .children
                                            .map((child) => {
                                                return (
                                                    <ListItem
                                                        button
                                                        key={child.id}
                                                        onClick={this
                                                        .handleClick
                                                        .bind(this, child.id, child.name, child.path, true)}>
                                                        <ListItemText
                                                            className={classes.itemText}
                                                            disableTypography={true}
                                                            inset={true}
                                                            primary={child.name}></ListItemText>
                                                    </ListItem>
                                                );
                                            })}
                                    </List>
                                </Collapse>
                            )}
                        </div>
                    );
                })
}
            </List>
        );

        return (
            <Drawer
                variant="permanent"
                classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
            }}
                open={this.state.open}>
                <div className={classes.toolbar}>
                    <IconButton onClick={this.toggle}>
                        {this.state.open
                            ? <ChevronLeft/>
                            : <ChevronRight/>}
                    </IconButton>
                </div>
                <Divider/> {links}
            </Drawer>
        );
    }
}

Sidebar.propTypes = {
    onItemClick: PropTypes.func
};

export default withRoot(withStyles(styles)(Sidebar));