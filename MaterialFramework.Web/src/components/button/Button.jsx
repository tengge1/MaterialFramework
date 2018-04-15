import React from 'react';
import {Button as MaterialButton, withStyles} from 'material-ui';

const styles = theme => ({
    root: {
        textTransform: 'none'
    },
    raised: {
        color: theme
            .palette
            .getContrastText('#fff'),
        backgroundColor: '#fff'
    }
});

class Button extends React.Component {
    render() {
        const {
            disableFocusRipple,
            disableRipple,
            variant,
            color,
            children,
            classes,
            ...others
        } = this.props;

        return <MaterialButton
            disableFocusRipple={true}
            disableRipple={true}
            variant={variant || 'raised'}
            color={color}
            classes={(color === 'default' || color === undefined)
            ? {
                root: classes.root,
                raised: classes.raised
            }
            : {
                root: classes.root
            }}
            {...others}>{children || 'Button'}</MaterialButton>;
    }
}

export default withStyles(styles)(Button);