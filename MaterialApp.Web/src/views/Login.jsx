import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
    Input,
    InputAdornment,
    IconButton,
    InputLabel
} from 'material-ui';
import {VisibilityOff, Visibility} from 'material-ui-icons';
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
        width: 420,
        height: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    header: {
        paddingBottom: 0
    },
    avatar: {
        width: '64px',
        height: '64px'
    },
    content: {
        width: '260px',
        paddingBottom: '26px'
    },
    action: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        margin: '0 15px'
    }
};

class Login extends React.Component {

    state = {
        showPassword: false
    };

    login = () => {
        Cookies.set('isLogin', true);
        window
            .location
            .reload();
    }

    reset = () => {}

    handleShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    }

    render() {
        const {classes} = this.props;

        const avatar = <Avatar src={face} alt={'头像'} className={classes.avatar}/>;

        var passwordAdornment = <InputAdornment position="end">
            <IconButton
                onClick={this.handleShowPassword}
                onMouseDown={this.handleMouseDownPassword}>
                {this.state.showPassword
                    ? <VisibilityOff/>
                    : <Visibility/>}
            </IconButton>
        </InputAdornment>;

        return (
            <div className={classes.root}>
                <Card className={classes.card} raised={true} square={false}>
                    <CardHeader title={''} className={classes.header} avatar={avatar}/>
                    <CardContent className={classes.content}>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel>用户名</InputLabel>
                            <Input type={'text'} fullWidth={true}/>
                        </FormControl>
                        <FormControl className={classNames(classes.margin, classes.textField)}>
                            <InputLabel>密码</InputLabel>
                            <Input
                                type={this.state.showPassword
                                ? 'text'
                                : 'password'}
                                fullWidth={true}
                                endAdornment={passwordAdornment}/>
                        </FormControl>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Button
                            variant="raised"
                            color="primary"
                            className={classes.button}
                            onClick={this.login}>
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