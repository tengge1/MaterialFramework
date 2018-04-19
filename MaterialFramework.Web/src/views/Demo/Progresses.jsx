import React from 'react';
import {withStyles} from 'material-ui';
import {withRoot} from '../../withRoot';
import {Grid, CircularProgress} from '../../components/Components.jsx';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 16,
        overflow: 'scroll'
    },
    grid: {
        marginBottom: 100
    }
});

class Progresses extends React.Component {
    state = {
        bottomNavigation1_value: 0
    }

    render() {
        const {classes} = this.props;

        const progressColor = <Grid container item spacing={8}>
            <Grid item>
                <CircularProgress color={'primary'}/>
            </Grid>
            <Grid item>
                <CircularProgress color={'secondary'}/>
            </Grid>
            <Grid item>
                <CircularProgress color={'inherit'}/>
            </Grid>
        </Grid>;

        const progressSize = <Grid container item spacing={8}>
            <Grid item>
                <CircularProgress size={20}/>
            </Grid>
            <Grid item>
                <CircularProgress size={40}/>
            </Grid>
            <Grid item>
                <CircularProgress size={60}/>
            </Grid>
        </Grid>;

        const progressThickness = <Grid container item spacing={8}>
            <Grid item>
                <CircularProgress thickness={1}/>
            </Grid>
            <Grid item>
                <CircularProgress thickness={3.6}/>
            </Grid>
            <Grid item>
                <CircularProgress thickness={10}/>
            </Grid>
        </Grid>;

        const progressVarient = <Grid container item spacing={8}>
            <Grid item>
                <CircularProgress variant={'determinate'} value={30}/>
            </Grid>
            <Grid item>
                <CircularProgress variant={'indeterminate'} value={40}/>
            </Grid>
            <Grid item>
                <CircularProgress variant={'static'} value={50}/>
            </Grid>
        </Grid>;

        return <div className={classes.root}>
            <Grid
                container
                direction={'column'}
                alignContent={'flex-start'}
                alignItems={'flex-start'}
                className={classes.grid}
                spacing={16}>
                {progressColor}
                {progressSize}
                {progressThickness}
                {progressVarient}
            </Grid>
        </div>;
    }

    deleteChip = () => {}
}

export default withRoot(withStyles(styles)(Progresses));