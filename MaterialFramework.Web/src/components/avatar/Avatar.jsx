import React from 'react';
import {Avatar as MaterialAvatar, withStyles} from 'material-ui';

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

class Avatar extends React.Component {
    render() {
        const {
            size,
            classes,
            ...others
        } = this.props;

        return <MaterialAvatar
            className={size === 'small'
            ? classes.small
            : (size === 'large'
                ? classes.large
                : classes.medium)}
            {...others}></MaterialAvatar>;
    }
}

export default withStyles(styles)(Avatar);