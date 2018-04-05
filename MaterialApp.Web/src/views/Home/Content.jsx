import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import withRoot from '../../withRoot';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    }
});

class Content extends React.Component {
    render() {
        const {classes, className} = this.props;
        return (
            <main className={classNames(classes.root, className)}>
                <div className={classes.toolbar}/>
                <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
            </main>
        );
    }
}

export default withRoot(withStyles(styles)(Content));