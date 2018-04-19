import React from 'react';
import { withStyles } from 'material-ui';
import { withRoot } from '../../withRoot';
import {
    Grid,
    IconButton,
    Avatar,
    Icon,
    SvgIcon,
    Mail,
    Badge
} from '../../components/Components.jsx';
import Man from '../../assets/img/faces/marc.jpg';
import Woman from '../../assets/img/faces/avatar.jpg';

const styles = theme => ({
    root: {
        height: '100%',
        padding: 16,
        overflow: 'scroll'
    },
    grid: {
        marginBottom: 100
    },
    badgeBadge: {
        top: -8,
        right: -8
    }
});

function HomeIcon(props) {
    return <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>;
}

class Widgets extends React.Component {
    state = {
        bottomNavigation1_value: 0
    }

    render() {
        const { classes } = this.props;

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
                    <Badge
                        badgeContent={10}
                        color={'default'}
                        classes={{
                            badge: classes.badgeBadge
                        }}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'primary'}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'secondary'}>
                        <Mail />
                    </Badge>
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton>
                    <Badge badgeContent={10} color={'error'}>
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
                className={classes.grid}
                spacing={16}>
                {avatar}
                {icon}
                {badge}
            </Grid>
        </div>;
    }
}

export default withRoot(withStyles(styles)(Widgets));