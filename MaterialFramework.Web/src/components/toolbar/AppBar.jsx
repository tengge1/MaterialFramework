import React from 'react';
import {AppBar as MaterialAppBar, Toolbar as MaterialToolbar, withStyles} from 'material-ui';

const styles = theme => ({
    small: {
        minHeight: 32
    },
    medium: {
        minHeight: 48
    },
    large: {
        minHeight: 64
    }
});

class AppBar extends React.Component {
    render() {
        const {
            position,
            size,
            children,
            classes,
            ...others
        } = this.props;

        return <MaterialAppBar position={position || 'static'} {...others}>
            <MaterialToolbar
                classes={{
                root: size === 'small'
                    ? classes.small
                    : (size === 'large'
                        ? classes.large
                        : classes.medium)
            }}>
                {children}
            </MaterialToolbar>
        </MaterialAppBar>;
    }
}

export default withStyles(styles)(AppBar);