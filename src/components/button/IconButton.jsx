import React from 'react';
import classNames from 'classnames';
import { IconButton as MuiIconButton } from 'material-ui';
import withStyles from '../style/withStyles.jsx';
import { Home } from '../icon/Icons.jsx';

const styles = theme => ({
    root: {

    },
    large: {
        width: 48,
        height: 48
    },
    medium: {
        width: 32,
        height: 32
    },
    small: {
        width: 24,
        height: 24
    }
});

class IconButton extends React.Component {
    render() {
        const {
            children,
            size,
            className,
            classes,
            ...others
        } = this.props;

        const sizeStyle = size === 'large' ? classes.large :
            (size === 'small' ? classes.small : classes.medium);

        return <MuiIconButton className={classNames(sizeStyle, className)}
            {...others}>{children || <Home />}</MuiIconButton>;
    }
}

export default withStyles(styles)(IconButton);