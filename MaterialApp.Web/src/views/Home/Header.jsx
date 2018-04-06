import React from 'react';
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
import {Person, Notifications, ExitToApp} from "material-ui-icons";
import {themeBase, withRoot} from '../../withRoot';
import logo from "assets/img/reactlogo.png";

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        height: "44px",
        color: "#fff",
        boxShadow: 'none'
    },
    toolbar: {
        minHeight: "44px"
    },
    logo: {
        flex: 1,
        cursor: "default",
        userSelect: 'none'
    },
    img: {
        width: "35px",
        verticalAlign: "middle",
        marginRight: "5px"
    },
    userBtn: {
        width: "24px",
        height: "24px",
        marginRight: "20px"
    },
    logoutBtn: {
        width: "24px",
        height: "24px"
    },
    badge: {
        cursor: "pointer",
        marginRight: "20px"
    },
    badgeBadge: {
        top: "-6px",
        right: "-6px",
        width: "16px",
        height: "16px"
    },
    dropdownItem: {
        fontSize: "12px",
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: themeBase.palette.primary.main,
            color: "#FFFFFF"
        }
    }
});

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
        const {classes} = this.props;
        const {open} = this.state;

        var brand = (
            <div className={classes.logo}>
                <img src={logo} alt="logo" className={classes.img}/>
                权限管理平台
            </div>
        );

        var user = (
            <IconButton color="inherit" title="用户资料" className={classes.userBtn}>
                <Person/>
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
                        title="通知公告"
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

        var exit = (
            <IconButton color="inherit" title="退出程序" className={classes.logoutBtn}>
                <ExitToApp/>
            </IconButton>
        );

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        {brand}
                        {user}
                        {msg}
                        {exit}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRoot(withStyles(styles)(Header));
