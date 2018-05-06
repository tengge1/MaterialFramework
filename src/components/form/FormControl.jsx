import React from 'react';
import classNames from 'classnames';
import { FormControl as MuiFormControl } from 'material-ui';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        margin: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        'justifyContent': 'flex-start'
    }
});

class FormControl extends React.Component {
    render() {
        const {
            classes,
            className,
            children,
            ...others
        } = this.props;

        return <MuiFormControl className={classNames(classes.root, className)} {...others}>{children}</MuiFormControl>;
    }
}

export default withStyles(styles)(FormControl);