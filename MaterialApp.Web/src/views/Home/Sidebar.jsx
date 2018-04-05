import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import ChevronRightIcon from 'material-ui-icons/ChevronRight';

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

    render() {
        const {classes, className} = this.props;

        return (
            <Drawer
                variant="permanent"
                classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose)
            }}
                open={this.state.open}>
                <div className={classes.toolbar}>
                    <Typography noWrap>系统菜单</Typography>
                    <IconButton onClick={this.toggleDrawer}>
                        {this.state.open
                            ? <ChevronLeftIcon/>
                            : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
            </Drawer>
        );
    }
}

Sidebar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Sidebar);