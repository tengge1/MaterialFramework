import React from 'react';
import { withStyles } from 'material-ui';
import {
    Grid,
    Button,
    AppBar,
    Toolbar,
    BottomNavigation,
    BottomNavigationAction,
    Restore,
    Favorite,
    LocationOn
} from '../../components/Components.jsx';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 16,
        overflow: 'scroll'
    }
});

class Toolbars extends React.Component {
    state = {
        bottomNavigation1_value: 0
    }

    render() {
        const { classes } = this.props;

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
                    <Button color={'default'} size={'small'}>Add</Button>
                    <Button color={'default'} size={'small'}>Edit</Button>
                    <Button color={'default'} size={'small'}>Search</Button>
                    <Button color={'default'} size={'small'}>Delete</Button>
                </Toolbar>
            </Grid>
        </Grid>;

        const bottomNavigation = <Grid container item spacing={8}>
            <Grid item>
                <BottomNavigation
                    value={this.state.bottomNavigation1_value}
                    onChange={this.handleBottomNavigationChange}>
                    <BottomNavigationAction label="Recents" icon={< Restore />} />
                    <BottomNavigationAction label="Favorites" icon={< Favorite />} />
                    <BottomNavigationAction label="Nearby" icon={< LocationOn />} />
                </BottomNavigation>
            </Grid>
            <Grid item>
                <BottomNavigation
                    showLabels={true}
                    value={this.state.bottomNavigation1_value}
                    onChange={this.handleBottomNavigationChange}>
                    <BottomNavigationAction label="Recents" icon={< Restore />} />
                    <BottomNavigationAction label="Favorites" icon={< Favorite />} />
                    <BottomNavigationAction label="Nearby" icon={< LocationOn />} />
                </BottomNavigation>
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
                {appBarColor}
                {appBarSize}
                {toolbar}
                {bottomNavigation}
            </Grid>
        </div>;
    }

    handleBottomNavigationChange = (event, value) => {
        this.setState({ bottomNavigation1_value: value });
    }
}

export default withStyles(styles)(Toolbars);