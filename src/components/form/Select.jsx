import React from 'react';
import classNames from 'classnames';
import { Select as MuiSelect } from 'material-ui';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        width: 182
    }
});

class Select extends React.Component {
    render() {
        const {
            children,
            classes,
            className,
            ...others
        } = this.props;

        return <MuiSelect className={classNames(classes.root, className)} {...others}>{children}</MuiSelect>;
    }
}

export default withStyles(styles)(Select);