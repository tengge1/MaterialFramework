import React from 'react';
import classNames from 'classnames';
import {
    With,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse
} from '../../components/Components';
import { ChevronLeft, ChevronRight, ExpandLess, ExpandMore } from '../../components/Icons';
import SidebarController from './SidebarController';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

const drawerWidth = 260;

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
    links: {
        width: drawerWidth - 1
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
    render() {
        const { classes } = this.props;

        var links = (
            <div className={classes.links} ref={'root'}>
                <List component="div">
                    {this.state.menus.map((prop) => {
                        return (
                            <div key={prop.id}>
                                <ListItem
                                    button
                                    key={prop.id}
                                    className={this.state.open ? '' : classes.itemClose}
                                    onClick={this.handleClick.bind(this, prop.id, prop.name, prop.path, prop.children == null || prop.children.length === 0)}>
                                    <ListItemIcon>
                                        <prop.icon />
                                    </ListItemIcon>
                                    <ListItemText
                                        className={classes.itemText}
                                        disableTypography={true}
                                        primary={prop.name}></ListItemText>
                                    {(prop.children != null && prop.children.length > 0) && (this.state.expand.indexOf(prop.id) === -1
                                        ? <ExpandMore />
                                        : <ExpandLess />)
                                    }
                                </ListItem>
                                {prop.children && (
                                    <Collapse
                                        in={this.state.expand.indexOf(prop.id) > -1}
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
                                                            onClick={this.handleClick.bind(this, child.id, child.name, child.path, true)}>
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
            </div>
        );

        return (
            <Drawer
                variant="permanent"
                classes={{
                    paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
                }}
                open={this.state.open}>
                <div className={classes.toolbar}>
                    <IconButton size={'large'} onClick={this.toggle.bind(this)}>
                        {this.state.open
                            ? <ChevronLeft />
                            : <ChevronRight />}
                    </IconButton>
                </div>
                <Divider /> {links}
            </Drawer>
        );
    }
}

export default With(Sidebar, { styles: styles, controller: SidebarController });