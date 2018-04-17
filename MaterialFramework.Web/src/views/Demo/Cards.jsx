import React from 'react';
import { withStyles } from 'material-ui';
import { withRoot } from '../../withRoot';
import {
    Grid,
    FlatButton,
    Card,
    CardHeader,
    CardContent,
    CardMedia,
    CardActions,
    Avatar,
    IconButton,
    MoreVert
} from '../../Components';
import Man from '../../assets/img/faces/marc.jpg';
import Cover from '../../assets/img/cover.jpeg';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 16,
        overflow: 'scroll'
    },
    grid: {
        marginBottom: 100
    },
    card: {
        width: 400,
        marginTop: 15
    },
    media: {
        height: 200
    }
});

class Cards extends React.Component {
    state = {
        bottomNavigation1_value: 0
    }

    render() {
        const { classes } = this.props;

        const avatar = <Avatar src={Man} />

        const action = <IconButton>
            <MoreVert />
        </IconButton>;

        const card1 = <Card className={classes.card}>
            <CardHeader avatar={avatar} title={'Lizard'} subheader={'subheader'} action={action} />
            <CardContent>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </CardContent>
            <CardMedia image={Cover} className={classes.media} />
            <CardActions>
                <FlatButton>Share</FlatButton>
                <FlatButton>Learn More</FlatButton>
            </CardActions>
        </Card>;

        const card2 = <Card raised={true} className={classes.card}>
            <CardHeader avatar={avatar} title={'Lizard'} subheader={'subheader'} action={action} />
            <CardContent>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                </CardContent>
            <CardMedia image={Cover} className={classes.media} />
            <CardActions>
                <FlatButton>Share</FlatButton>
                <FlatButton>Learn More</FlatButton>
            </CardActions>
        </Card>;

        return <div className={classes.root}>
            <Grid
                container
                direction={'column'}
                alignContent={'flex-start'}
                alignItems={'flex-start'}
                className={classes.grid}
                spacing={16}>
                {card1}
                {card2}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Cards));