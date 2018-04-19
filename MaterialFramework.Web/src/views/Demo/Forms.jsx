import React from 'react';
import {withStyles} from 'material-ui';
import {withRoot} from '../../withRoot';
import {Grid, Checkbox, Chip, Avatar} from '../../components/Components.jsx';
import Man from '../../assets/img/faces/marc.jpg';

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
        const {classes} = this.props;

        const checkboxColor = <Grid container item spacing={8}>
            <Grid item>
                <Checkbox color={'primary'} checked={true}/>
            </Grid>
            <Grid item>
                <Checkbox color={'secondary'} checked={true}/>
            </Grid>
            <Grid item>
                <Checkbox color={'default'} checked={true}/>
            </Grid>
        </Grid>;

        const checkboxStatus = <Grid container item spacing={8}>
            <Grid item>
                <Checkbox checked={true}/>
            </Grid>
            <Grid item>
                <Checkbox disabled={true}/>
            </Grid>
            <Grid item>
                <Checkbox indeterminate={true}/>
            </Grid>
        </Grid>;

        const avatar = <Avatar src={Man}/>

        var chip = <Chip avatar={avatar} label={'选项1'} onDelete={this.deleteChip}/>

        return <div className={classes.root}>
            <Grid
                container
                direction={'column'}
                alignContent={'flex-start'}
                alignItems={'flex-start'}
                className={classes.grid}
                spacing={16}>
                {checkboxColor}
                {checkboxStatus}
                {chip}
            </Grid>
        </div>;
    }

    deleteChip = () => {}
}

export default withRoot(withStyles(styles)(Buttons));