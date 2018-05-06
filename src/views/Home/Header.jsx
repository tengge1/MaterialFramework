import React from 'react';
import { Manager, Target, Popper } from 'react-popper';
import {
    AppBar,
    Toolbar,
    MenuList,
    MenuItem,
    IconButton,
    Grow,
    Paper,
    ClickAwayListener,
    Badge,
    Grid,
    ToggleButton,
    Avatar,
    Controller,
    Confirm
} from '../../components/Components';
import { Lock, Notifications, Build, ExitToApp } from '../../components/Icons';
import ChangePwdWin from './ChangePwdWin';
import HeaderController from './HeaderController';
import logo from 'assets/img/cnpc_logo.png';
import Face from '../../assets/img/faces/marc.jpg';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appBar: {
        color: '#fff'
    },
    logo: {
        cursor: "default",
        userSelect: 'none',
        width: 500
    },
    img: {
        width: 35,
        verticalAlign: "middle",
        marginRight: 15
    },
    navItem: {
        marginLeft: 10
    },
    navBtn: {
        color: theme.palette.getContrastText(theme.palette.primary.main)
    },
    user: {
        width: 200,
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
    changePwdBtn: {
        width: 24,
        height: 24,
        marginRight: 15
    },
    buildBtn: {
        width: 24,
        height: 24,
        marginRight: 15
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
    render() {
        const { classes } = this.props;
        const { msgOpen, pwdOpen, currentNavId } = this.state;

        const brand =
            <div className={classes.logo}>
                <img src={logo} alt="logo" className={classes.img} />
                大数据分析与综合业务管理平台
            </div>;

        const navMenu =
            <Grid container>
                {this.navMenu.map((n, i) => {
                    return <Grid item className={classes.navItem} key={i}>
                        <ToggleButton
                            className={classes.navBtn}
                            toggle={currentNavId === n.id ? true : false}
                            onClick={this.handleNavClick.bind(this, n.id, n.name, n.path, n.children)}>{n.name}</ToggleButton>
                    </Grid>;
                })}
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

        const changePassword =
            <IconButton
                color="inherit"
                title="修改密码"
                className={classes.changePwdBtn}
                onClick={this.handlePwdOpen.bind(this)}>
                <Lock />
            </IconButton>;

        const msg = (
            <Manager>
                <Target>
                    <Badge
                        className={classes.badge}
                        classes={{
                            badge: classes.badgeBadge
                        }}
                        badgeContent={3}
                        color="error"
                        title="通知公告"
                        onClick={this.handleMsgClick.bind(this)}>
                        <Notifications />
                    </Badge>
                </Target>
                <Popper>
                    <ClickAwayListener onClickAway={this.handleMsgClose.bind(this)}>
                        <Grow
                            in={msgOpen}
                            style={{
                                transformOrigin: "0 0 0"
                            }}>
                            <Paper>
                                <MenuList role="menu">
                                    <MenuItem onClick={this.handleMsgClose.bind(this)} className={classes.dropdownItem}>
                                        一个通知
                                    </MenuItem>
                                    <MenuItem onClick={this.handleMsgClose.bind(this)} className={classes.dropdownItem}>
                                        另外一个通知
                                    </MenuItem>
                                    <MenuItem onClick={this.handleMsgClose.bind(this)} className={classes.dropdownItem}>
                                        又来一个通知
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </Grow>
                    </ClickAwayListener>
                </Popper>
            </Manager>
        );

        const build =
            <IconButton
                color="inherit"
                title="皮肤编辑器"
                className={classes.buildBtn}>
                <Build />
            </IconButton>;

        var exit = (
            <IconButton
                color="inherit"
                title="注销登录"
                className={classes.logoutBtn}
                onClick={this.queryLogout.bind(this)}>
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
                        {changePassword}
                        {msg}
                        {build}
                        {exit}
                    </Toolbar>
                </AppBar>
                <ChangePwdWin
                    open={pwdOpen}
                    onClose={this.handlePwdClose.bind(this)} />
                <Confirm
                    title={'消息'}
                    content={'是否注销登录？'}
                    open={this.state.logoutOpen}
                    onOK={this.handleConfirmLogout.bind(this)}
                    onCancel={this.handleCancelLogout.bind(this)} />
            </div>
        );
    }
}

export default Controller(Header, { styles: styles, controller: HeaderController });
