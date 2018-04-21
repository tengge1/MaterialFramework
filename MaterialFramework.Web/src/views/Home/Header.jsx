import React from 'react';
import Cookies from 'js-cookie';
import { Manager, Target, Popper } from 'react-popper';
import {
    withStyles,
    AppBar,
    Toolbar,
    MenuList,
    MenuItem,
    IconButton,
    Grow,
    Paper,
    ClickAwayListener,
    Badge,
    Notifications,
    ExitToApp,
    Grid,
    FlatButton,
    Avatar
} from '../../components/Components';
import logo from 'assets/img/reactlogo.png';
import Face from '../../assets/img/faces/marc.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        color: '#fff',
        boxShadow: 'none'
    },
    logo: {
        cursor: "default",
        userSelect: 'none',
        width: 400
    },
    img: {
        width: 35,
        verticalAlign: "middle",
        marginRight: 5
    },
    navItem: {
        margin: '0 20px'
    },
    navBtn: {
        color: 'white'
    },
    user: {
        width: 260,
        flex: 'none'
    },
    userText: {
        color: '#fff',
        marginLeft: 10,
        paddingTop: 4,
        fontSize: 12
    },
    userDept: {
        fontWeight: 300
    },
    userName: {
        marginLeft: 5
    },
    logoutBtn: {
        width: 24,
        height: 24
    },
    badge: {
        cursor: 'pointer',
        marginRight: 20
    },
    badgeBadge: {
        top: -6,
        right: -6,
        width: 16,
        height: 16
    },
    dropdownItem: {
        fontSize: 12,
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: theme.palette.primary.main,
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
        this.setState({ open: false });
    };

    logout = () => {
        Cookies.remove('isLogin');
        window
            .location
            .reload();
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        const brand =
            <div className={classes.logo}>
                <img src={logo} alt="logo" className={classes.img} />
                权限管理平台
            </div>;

        const navMenu =
            <Grid container>
                <Grid item className={classes.navItem}>
                    <FlatButton className={classes.navBtn}>地理信息系统</FlatButton>
                </Grid>
                <Grid item className={classes.navItem}>
                    <FlatButton className={classes.navBtn}>工作中心</FlatButton>
                </Grid>
                <Grid item className={classes.navItem}>
                    <FlatButton className={classes.navBtn}>系统管理</FlatButton>
                </Grid>
            </Grid>;

        const user =
            <Grid container className={classes.user}>
                <Grid item className={classes.userIcon}>
                    <Avatar src={Face} size={'small'} />
                </Grid>
                <Grid item className={classes.userText}>
                    <span className={classes.userDept}>中国移动公司</span> <span className={classes.userName}>管理员</span>
                </Grid>
            </Grid>;

        const msg = (
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
                        <Notifications />
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
            <IconButton
                color="inherit"
                title="注销登录"
                className={classes.logoutBtn}
                onClick={this.logout}>
                <ExitToApp />
            </IconButton>
        );

        return (
            <div className={classes.root}>
                <AppBar position={'fixed'} color={'primary'} size={'medium'} className={classes.appBar}>
                    <Toolbar size={'medium'}>
                        {brand}
                        {navMenu}
                        {user}
                        {msg}
                        {exit}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);
