import React from 'react';
import classNames from 'classnames';
import withStyles from '../style/withStyles';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 24px'
    }
});

class DialogBody extends React.Component {
    render() {
        const {
            classes,
            className,
            children,
            ...others
        } = this.props;
        return <div className={classNames(classes.root, className)} {...others}>{children}</div>;
    }
}

export default withStyles(styles)(DialogBody);