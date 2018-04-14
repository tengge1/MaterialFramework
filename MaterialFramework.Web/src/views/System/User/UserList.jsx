import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Button, withStyles } from 'material-ui';
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
        const buttons =
            <div>
                <Button variant="raised" size="small" color="primary" className={classes.button}>
                    添加
                </Button>
                <Button variant="raised" size="small" color="primary" className={classes.button}>
                    编辑
                </Button>
                <Button variant="raised" size="small" color="primary" className={classes.button}>
                    查询
                </Button>
                <Button variant="raised" size="small" color="primary" className={classes.button}>
                    删除
                </Button>
            </div>;

        return (
            <React.Fragment>
                {buttons}
                <GridPanel className={classes.root} />
            </React.Fragment>
        );
    }
}

export default withRoot(withStyles(styles)(UserList));