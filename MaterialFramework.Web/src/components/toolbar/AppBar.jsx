import React from 'react';
import { AppBar as MaterialAppBar, withStyles } from 'material-ui';

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
            ...others
        } = this.props;

        return <MaterialAppBar position={position || 'static'} {...others}>
            {children}
        </MaterialAppBar>;
    }
}

export default withStyles(styles)(AppBar);