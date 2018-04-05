import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Manager, Target, Popper} from "react-popper";
import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    MenuList,
    MenuItem,
    Grow,
    Paper,
    ClickAwayListener,
    Badge
} from "material-ui";
import {Person, Notifications} from "material-ui-icons";
import withRoot from '../../withRoot';
import headerStyle from "variables/styles/headerStyle";
import logo from "assets/img/reactlogo.png";

class Header extends React.Component {
    state = {
        open: false
    };

    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes, className} = this.props;
        const {open} = this.state;

        var brand = (
            <div className={classes.logo}>
                <img src={logo} alt="logo" className={classes.img}/>
                权限管理平台
            </div>
        );

        var user = (
            <IconButton color="inherit" aria-label="Person">
                <Person className={classes.links}/>
            </IconButton>
        );

        var msg = (
            <Manager>
                <Target>
                    <Badge
                        className={classes.badge}
                        classes={{
                        badge: classes.badgeBadge
                    }}
                        badgeContent={5}
                        color="error"
                        onClick={this.handleClick}>
                        <Notifications/>
                    </Badge>
                </Target>
                <Popper>
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={open}
                            style={{
                            transformOrigin: "0 0 0"
                        }}>
                            <Paper>
                                <MenuList role="menu">
                                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                        Mike John responded to your email
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                        You have 5 new tasks
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                        You're now friend with Andrew
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                        Another Notification
                                    </MenuItem>
                                    <MenuItem onClick={this.handleClose} className={classes.dropdownItem}>
                                        Another One
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </Grow>
                    </ClickAwayListener>
                </Popper>
            </Manager>
        );

        return (
            <div className={classNames(classes.root, className)}>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        {brand}
                        {user}
                        {msg}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(headerStyle)(Header));
