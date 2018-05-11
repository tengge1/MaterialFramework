import React from 'react';
import classNames from 'classnames';
import Button from './Button.jsx';
import withStyles from '../style/withStyles.jsx';

const styles = theme => ({
    root: {

    },
    toggle: {
        backgroundColor: theme.palette.action.selected
    }
});

class ToggleButton extends React.Component {
    render() {
        const {
            toggle,
            children,
            classes,
            className,
            ...others
        } = this.props;
        return <Button variant={'flat'} className={toggle === true ? classNames(className, classes.toggle) : className} {...others}>{children}</Button>;
    }
}

export default withStyles(styles)(ToggleButton);