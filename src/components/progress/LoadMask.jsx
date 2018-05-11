import React from 'react';
import classNames from 'classnames';
import CircularProgress from './CircularProgress.jsx';
import withStyles from '../style/withStyles.jsx';

const msgColor = 'rgba(255, 255, 255, 0.3)';

const styles = theme => ({
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: msgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    hidden: {
        display: 'none'
    },
    msg: {
        marginTop: 8,
        color: theme.palette.getContrastText(msgColor)
    }
});

class LoadMask extends React.Component {
    render() {
        const { classes, className, show, msg, ...others } = this.props;

        return <div className={classNames(classes.root, className, show ? null : classes.hidden)} {...others}>
            <CircularProgress size={60} thickness={5} />
            <div className={classes.msg}>{msg === undefined ? '请稍后...' : msg}</div>
        </div>;
    }
}

export default withStyles(styles)(LoadMask);