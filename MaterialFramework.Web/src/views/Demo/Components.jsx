import React from 'react';
import {withStyles} from 'material-ui';
import {withRoot} from '../../withRoot';
import {Grid, Button, FlatButton, RoundButton} from '../../Components';

const styles = theme => ({
    root: {
        padding: 16
    }
});

class Components extends React.Component {
    render() {
        const {classes} = this.props;

        const buttonColor = <Grid container item spacing={8}>
            <Grid item>
                <Button color={'default'}>Default</Button>
            </Grid>
            <Grid item>
                <Button color={'primary'}>Primary</Button>
            </Grid>
            <Grid item>
                <Button color={'secondary'}>Secondary</Button>
            </Grid>
        </Grid>;

        const buttonSize = <Grid container item spacing={8}>
            <Grid item>
                <Button size={'small'}>Small</Button>
            </Grid>
            <Grid item>
                <Button size={'medium'}>Medium</Button>
            </Grid>
            <Grid item>
                <Button size={'large'}>Large</Button>
            </Grid>
        </Grid>;

        const buttonType = <Grid container item spacing={8}>
            <Grid item>
                <Button>Button</Button>
            </Grid>
            <Grid item>
                <FlatButton>Flat</FlatButton>
            </Grid>
            <Grid item>
                <RoundButton>Round</RoundButton>
            </Grid>
        </Grid>;

        return <div className={classes.root}>
            <Grid
                container
                direction={'column'}
                alignContent={'flex-start'}
                alignItems={'flex-start'}
                spacing={16}>
                {buttonColor}
                {buttonSize}
                {buttonType}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Components));