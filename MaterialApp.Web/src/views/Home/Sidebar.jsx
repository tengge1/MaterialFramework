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
    itemText: {
        fontSize: '14px',
        lineHeight: "30px"
    }
});

class Sidebar extends React.Component {
    state = {
        open: true
    };

    openDrawer = () => {
        this.setState({open: true});
    };

    closeDrawer = () => {
        this.setState({open: false});
    };

    toggleDrawer = () => {
        if (this.state.open === true) {
            this.closeDrawer();
        } else {
            this.openDrawer();
        }
    };

    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return true;
        // return this     .props     .location     .pathname     .indexOf(routeName) >
        // -1     ? true     : false;
    }

    handleExpandClick() {
        // this.setState({     expanded: !this.state.expanded });
    };

    render() {
        const {classes} = this.props;

        var links = (
            <List component="div">
                {appRoutes.map((prop, key) => {
                    return (
                        <NavLink
                            to={prop.path}
                            data-toggle="collapse"
                            className={classes.navLink}
                            activeClassName="active"
                            key={key}>
                            <ListItem button onClick={this.handleExpandClick}>
                                <ListItemIcon>
                                    <prop.icon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={prop.sidebarName}
                                    className={classes.itemText}
                                    disableTypography={true}>
                                    {this.state.open
                                        ? <ExpandLess/>
                                        : <ExpandMore/>}
                                </ListItemText>
                            </ListItem>
                        </NavLink>
                    );
                })}
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