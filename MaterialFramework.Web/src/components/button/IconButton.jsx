import React from 'react';
import classNames from 'classnames';
import { IconButton as MaterialIconButton } from 'material-ui';
import withStyles from '../style/withStyles';
import { Home } from '../icon/Icons';

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

        return <MaterialIconButton className={classNames(sizeStyle, className)}
            {...others}>{children || <Home />}</MaterialIconButton>;
    }
}

export default withStyles(styles)(IconButton);