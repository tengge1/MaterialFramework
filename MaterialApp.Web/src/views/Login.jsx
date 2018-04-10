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
        username: '',
        password: '',
        showPassword: false
    };

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        Cookies.set('isLogin', true);
        window
            .location
            .reload();
    }

    reset = () => {
        this.setState({username: '', password: ''});
    }

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
                <form method="POST" onSubmit={this.handleSubmit}>
                    <Card className={classes.card} raised={true} square={false}>
                        <CardHeader title={''} className={classes.header} avatar={avatar}/>
                        <CardContent className={classes.content}>
                            <FormControl className={classNames(classes.margin, classes.textField)}>
                                <InputLabel>用户名</InputLabel>
                                <Input
                                    type={'text'}
                                    name={'username'}
                                    value={this.state.username}
                                    fullWidth={true}
                                    onChange={this.handleInputChange}/>
                            </FormControl>
                            <FormControl className={classNames(classes.margin, classes.textField)}>
                                <InputLabel>密码</InputLabel>
                                <Input
                                    type={this.state.showPassword
                                    ? 'text'
                                    : 'password'}
                                    name={'password'}
                                    value={this.state.password}
                                    fullWidth={true}
                                    endAdornment={passwordAdornment}
                                    onChange={this.handleInputChange}/>
                            </FormControl>
                        </CardContent>
                        <CardActions className={classes.action}>
                            <Button
                                type="submit"
                                variant="raised"
                                color="primary"
                                className={classes.button}>
                                登录
                            </Button>
                            <Button variant="raised" className={classes.button} onClick={this.reset}>
                                清空
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Login));