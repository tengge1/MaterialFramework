import React from 'react';
import {Paper, withStyles} from 'material-ui';
import Grid from '../grid/Grid.jsx';

const styles = theme => ({
    root: {
        padding: 3
    }
});

class Toolbar extends React.Component {
    render() {
        const {
            children,
            classes,
            ...others
        } = this.props;

        const items = typeof(children) === 'string'
            ? <label>{children}</label>
            : children.map(function (n, index) {
                return <Grid item key={index}>{n}</Grid>;
            });

        return <Paper
            elevation={2}
            square={true}
            classes={{
            root: classes.root
        }}>
            <Grid
                container
                direction={'row'}
                alignItems={'center'}
                justify={'flex-start'}
                spacing={8}
                {...others}>{items}</Grid>
        </Paper>;
    }
}

export default withStyles(styles)(Toolbar);