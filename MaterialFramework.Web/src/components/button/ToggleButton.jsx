import React from 'react';
import Button from './Button.jsx';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {

    },
    toggle: {

    }
});

class ToggleButton extends React.Component {
    render() {
        const {
            toggle,
            children,
            classes,
            ...others
        } = this.props;
        return <Button variant={'flat'} className={toggle === true ? classes.toggle : null} {...others}>{children}</Button>;
    }
}

export default withStyles(styles)(ToggleButton);