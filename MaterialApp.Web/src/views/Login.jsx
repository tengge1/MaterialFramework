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
    FormControl,
    FormLabel,
    Grid,
    Input
} from 'material-ui';
import Cookies from 'js-cookie';
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
    avatar: {
        width: '64px',
        height: '64px'
    },
    content: {
        width: '70%'
    },
    action: {
        display: 'flex',
        justifyContent: 'center'
    }
};

class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    login = () => {
        Cookies.set('isLogin', true);
        window
            .location
            .reload();
    }

    reset = () => {

    }

    render() {
        const { classes } = this.props;

        const avatar = <Avatar src={face} alt={'头像'} className={classes.avatar} />;

        return (
            <div className={classes.root}>
                <Card className={classes.card} raised={true} square={false}>
                    <CardHeader title={''} avatar={avatar} />
                    <CardContent className={classes.content}>
                        <Grid container spacing={24}>
                            <Grid item md={3}>
                                <FormLabel>用户名</FormLabel>
                            </Grid>
                            <Grid item md={9}>
                                <Input autoFocus={true} name={'username'} required={true} fullWidth={true} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={24}>
                            <Grid item md={3}>
                                <FormLabel>密码</FormLabel>
                            </Grid>
                            <Grid item md={9}>
                                <Input name={'password'} required={true} fullWidth={true} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Button variant="raised" color="primary" className={classes.button} onClick={this.login}>
                            登录
                        </Button>
                        <Button variant="raised" className={classes.button} onClick={this.reset}>
                            清空
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Login));