import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import cx from 'classnames';
import {
    withStyles,
    Drawer,
    Typography,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Hidden
} from 'material-ui';
import {ChevronLeft, ChevronRight, ExpandLess, ExpandMore} from 'material-ui-icons';
import {NavLink} from "react-router-dom";
import appRoutes from '../../routes/app.jsx';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex'
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            }),
        zIndex: 1
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        width: theme.spacing.unit * 7,
        zIndex: 1
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
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
        this.setState({
            expanded: !this.state.expanded
        });
    };

    render() {
        const {classes, color, logo, image, logoText} = this.props;

        var links = (
            <List className={classes.list}>
                {appRoutes.map((prop, key) => {
                    if (prop.redirect) 
                        return null;
                    const listItemClasses = cx({
                        [" " + classes[color]]: this.activeRoute(prop.path)
                    });
                    const whiteFontClasses = cx({
                        [" " + classes.whiteFont]: this.activeRoute(prop.path)
                    });
                    return (
                        <div>
                            <NavLink
                                to={prop.path}
                                className={prop.classes}
                                data-toggle="collapse"
                                activeClassName="active"
                                key={key}>
                                <ListItem
                                    button
                                    className={classes.itemLink + listItemClasses}
                                    onClick={this.handleExpandClick}>
                                    <ListItemIcon className={classes.itemIcon + whiteFontClasses}>
                                        <prop.icon/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={prop.sidebarName}
                                        className={classes.itemText + whiteFontClasses}
                                        disableTypography={true}>
                                        {this.state.open
                                            ? <ExpandLess/>
                                            : <ExpandMore/>}
                                    </ListItemText>
                                </ListItem>
                            </NavLink>
                        </div>
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
                    <Typography noWrap></Typography>
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

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Sidebar);