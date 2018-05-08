import React from 'react';
import classNames from 'classnames';
import CircularProgress from './CircularProgress';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    hidden: {
        display: 'none'
    }
});

class LoadMask extends React.Component {
    render() {
        const { classes, className, show, ...others } = this.props;

        return <div className={classNames(classes.root, className, show ? null : classes.hidden)}>
            <CircularProgress />
        </div>;
    }
}

export default withStyles(styles)(LoadMask);