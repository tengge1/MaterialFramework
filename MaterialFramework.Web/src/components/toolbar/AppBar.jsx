import React from 'react';
import classNames from 'classnames';
import { AppBar as MaterialAppBar, withStyles } from 'material-ui';

const styles = theme => ({
    small: {
        height: 32
    },
    medium: {
        height: 48
    },
    large: {
        height: 64
    }
});

class AppBar extends React.Component {
    render() {
        const {
            position,
            size,
            classes,
            className,
            children,
            ...others
        } = this.props;

        var sizeCls = '';
        if (size === 'small') {
            sizeCls = classes.small;
        } else if (size === 'large') {
            sizeCls = classes.large;
        } else {
            sizeCls = classes.medium;
        }

        return <MaterialAppBar position={position || 'static'} className={classNames(sizeCls, className)} {...others}>
            {children}
        </MaterialAppBar>;
    }
}

export default withStyles(styles)(AppBar);