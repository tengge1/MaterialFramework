import React from 'react';
import classNames from 'classnames';
import withStyles from '../style/withStyles';
import { FormLabel as MaterialFormLabel } from 'material-ui';

const styles = theme => ({
    root: {
        width: 64,
        margin: 8
    }
});

class FormLabel extends React.Component {
    render() {
        const {
            children,
            classes,
            className,
            ...others
        } = this.props;

        return <MaterialFormLabel
            className={classNames(classes.root, className)}
            {...others}>{children}</MaterialFormLabel>;
    }
}

export default withStyles(styles)(FormLabel);