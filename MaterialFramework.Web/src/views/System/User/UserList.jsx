import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import GridPanel from '../../../components/table/GridPanel';
import withRoot from '../../../withRoot';

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

class UserList extends React.Component {
    render() {
        const { classes } = this.props;
        return <GridPanel className={classes.root} />
    }
}

export default withRoot(withStyles(styles)(UserList));