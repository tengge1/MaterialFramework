import React from 'react';
import {Badge as MaterialBadge, withStyles} from 'material-ui';

const styles = theme => ({
    small: {
        width: '28px',
        height: '28px'
    },
    medium: {
        width: '40px',
        height: '40px'
    },
    large: {
        width: '64px',
        height: '64px'
    }
});

class Badge extends React.Component {
    render() {
        const {
            size,
            classes,
            ...others
        } = this.props;

        return <MaterialBadge
            className={size === 'small'
            ? classes.small
            : (size === 'large'
                ? classes.large
                : classes.medium)}
            {...others}></MaterialBadge>;
    }
}

export default withStyles(styles)(Badge);