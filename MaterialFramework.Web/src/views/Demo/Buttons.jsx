import React from 'react';
import { withStyles } from 'material-ui';
import { withRoot } from '../../withRoot';
import {
    Grid,
    Button,
    FlatButton,
    RoundButton,
    IconButton,
    Add,
    Edit,
    Search,
    Delete
} from '../../components/Components';

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

class Buttons extends React.Component {
    state = {
        bottomNavigation1_value: 0
    }

    render() {
        const { classes } = this.props;

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

        const iconButton = <Grid container item spacing={8}>
            <Grid item>
                <IconButton>
                    <Add />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Edit />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Search />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Delete />
                </IconButton>
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
                {buttonColor}
                {buttonSize}
                {buttonType}
                {iconButton}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Buttons));