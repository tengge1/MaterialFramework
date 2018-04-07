import React from 'react';
import classNames from 'classnames';
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
import {NavLink} from "react-router-dom";
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

    openDrawer = () => {
        this.setState({open: true});
    };

    closeDrawer = () => {
        this.setState({open: false, expand: []});
    };

    toggleDrawer = () => {
        if (this.state.open === true) {
            this.closeDrawer();
        } else {
            this.openDrawer();
        }
    };

    handleClick = (id) => {
        var expand = this.state.expand;
        if (expand.indexOf(id) === -1) {
            expand.push(id);
        } else {
            var index = expand.indexOf(id);
            expand.splice(index, 1);
        }
        this.setState({expand: expand});
    };

    render() {
        const {classes} = this.props;

        var links = (
            <List component="div">
                {appRoutes.map((prop) => {
                    return (
                        <div key={prop.id}>
                            <NavLink
                                to={prop.path}
                                data-toggle="collapse"
                                className={classes.navLink}
                                activeClassName="active"
                                key={prop.id}>
                                <ListItem
                                    button
                                    className={this.state.open
                                    ? ''
                                    : classes.itemClose}
                                    onClick={this
                                    .handleClick
                                    .bind(this, prop.id)}>
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
                            </NavLink>
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
                                                    <NavLink
                                                        to={child.path}
                                                        className={classes.navLink}
                                                        activeClassName="active"
                                                        key={child.id}>
                                                        <ListItem
                                                            button
                                                            key={child.id}
                                                            onClick={this
                                                            .handleClick
                                                            .bind(this, child.id)}>
                                                            <ListItemText inset primary={child.name}></ListItemText>
                                                        </ListItem>
                                                    </NavLink>
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
                    <IconButton onClick={this.toggleDrawer}>
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

export default withRoot(withStyles(styles)(Sidebar));