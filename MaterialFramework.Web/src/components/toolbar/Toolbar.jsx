import React from 'react';
import classNames from 'classnames';
import { Toolbar as MaterialToolbar, withStyles } from 'material-ui';

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

class Toolbar extends React.Component {
    render() {
        const {
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

        return <MaterialToolbar className={classNames(sizeCls, className)} {...others}>
            {children}
        </MaterialToolbar>;
    }
}

export default withStyles(styles)(Toolbar);