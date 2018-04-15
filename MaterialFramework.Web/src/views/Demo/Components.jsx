import React from 'react';
import {withStyles} from 'material-ui';
import {withRoot} from '../../withRoot';
import {
    Grid,
    Button,
    FlatButton,
    RoundButton,
    AppBar,
    Toolbar
} from '../../Components';

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

        const appBarColor = <Grid container item spacing={8}>
            <Grid item xs={12}>
                <AppBar color={'default'}>Default AppBar</AppBar>
            </Grid>
            <Grid item xs={12}>
                <AppBar color={'primary'}>Primary AppBar</AppBar>
            </Grid>
            <Grid item xs={12}>
                <AppBar color={'secondary'}>Secondary AppBar</AppBar>
            </Grid>
        </Grid>;

        const appBarSize = <Grid container item spacing={8}>
            <Grid item xs={12}>
                <AppBar color={'default'} size={'small'}>Small AppBar</AppBar>
            </Grid>
            <Grid item xs={12}>
                <AppBar color={'primary'} size={'medium'}>Medium AppBar</AppBar>
            </Grid>
            <Grid item xs={12}>
                <AppBar color={'secondary'} size={'large'}>Large AppBar</AppBar>
            </Grid>
        </Grid>;

        const toolbar = <Grid container item spacing={8}>
            <Grid item xs={12}>
                <Toolbar color={'default'}>
                    <Button color={'primary'} size={'small'}>Add</Button>
                    <Button color={'primary'} size={'small'}>Edit</Button>
                    <Button color={'primary'} size={'small'}>Search</Button>
                    <Button color={'primary'} size={'small'}>Delete</Button>
                </Toolbar>
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
                {appBarColor}
                {appBarSize}
                {toolbar}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Components));