import React from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Button,
    withStyles,
    Typography,
    FormControl,
    FormLabel,
    Grid,
    Input
} from 'material-ui';
import withRoot from '../withRoot';
import cover from '../assets/img/cover.jpeg';
import face from '../assets/img/faces/avatar.jpg';

const styles = {
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `url(${cover}) no-repeat`,
        backgroundSize: 'cover'
    },
    card: {
        width: 450,
        height: 320,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    content: {
        margin: '0 30px'
    },
    action: {
        display: 'flex',
        justifyContent: 'center'
    }
};

function Login(props) {
    const {classes} = props;

    const avatar = <Avatar src={face} alt={'头像'}/>;

    return (
        <div className={classes.root}>
            <Card className={classes.card} raised={true} square={false}>
                <CardHeader title={'用户登录'} avatar={avatar}/>
                <CardContent className={classes.content}>
                    <Grid container spacing={24}>
                        <Grid item md={4}>
                            <FormLabel>用户名</FormLabel>
                        </Grid>
                        <Grid item md={8}>
                            <Input autoFocus={true} name={'username'} required={true} fullWidth={true}/>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item md={4}>
                            <FormLabel>密码</FormLabel>
                        </Grid>
                        <Grid item md={8}>
                            <Input name={'password'} required={true} fullWidth={true}/>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions className={classes.action}>
                    <Button variant="raised" className={classes.button}>
                        登录
                    </Button>
                    <Button variant="raised" color="primary" className={classes.button}>
                        清空
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Login));