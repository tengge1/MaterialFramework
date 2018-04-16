import React from 'react';
import { withStyles } from 'material-ui';
import { withRoot } from '../../withRoot';
import {
    Grid,
    Button,
    FlatButton,
    RoundButton,
    IconButton,
    AppBar,
    Toolbar,
    Avatar,
    Icon,
    SvgIcon,
    Mail,
    Badge
} from '../../Components';
import Man from '../../assets/img/faces/marc.jpg';
import Woman from '../../assets/img/faces/avatar.jpg';

const styles = theme => ({
    root: {
        padding: 16
    },
    badge: {
        top: '-12px',
        right: '-12px',
        width: '16px',
        height: '16px'
    }
});

function HomeIcon(props) {
    return <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>;
}

class Components extends React.Component {
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

        const avatar = <Grid container item spacing={8}>
            <Grid item>
                <Avatar src={Man} alt={'avatar'} />
            </Grid>
            <Grid item>
                <Avatar src={Woman} alt={'avatar'} />
            </Grid>
            <Grid item>
                <Avatar src={Man} size={'small'} />
            </Grid>
            <Grid item>
                <Avatar src={Woman} size={'small'} />
            </Grid>
            <Grid item>
                <Avatar src={Man} size={'large'} />
            </Grid>
            <Grid item>
                <Avatar src={Woman} size={'large'} />
            </Grid>
        </Grid>;

        const icon = <Grid container item spacing={8}>
            <Grid item>
                <Icon color={'primary'}>person</Icon>
            </Grid>
            <Grid item>
                <Icon color={'secondary'}>lock</Icon>
            </Grid>
            <Grid item>
                <Icon color={'action'}>star</Icon>
            </Grid>
            <Grid item>
                <Icon color={'disabled'}>add</Icon>
            </Grid>
            <Grid item>
                <Icon color={'primary'}>edit</Icon>
            </Grid>
            <Grid item>
                <Icon color={'secondary'}>search</Icon>
            </Grid>
            <Grid item>
                <Icon color={'action'}>delete</Icon>
            </Grid>
            <Grid item>
                <HomeIcon />
            </Grid>
            <Grid item>
                <IconButton />
            </Grid>
        </Grid>;

        const badge = <Grid container item spacing={8}>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'default'} className={classes.badge}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'primary'} className={classes.badge}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'secondary'} className={classes.badge}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'error'} className={classes.badge}>
                        <Mail />
                    </Badge>
                </IconButton>
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
                {avatar}
                {icon}
                {badge}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Components));