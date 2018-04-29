import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Avatar,
    Button,
    FormControl,
    Input,
    InputAdornment,
    IconButton,
    FormLabel,
    Controller
} from '../components/Components';
import { Visibility, VisibilityOff } from '../components/Icons';
import LoginController from './LoginController';
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
    input: {
        flex: 1
    },
    pwdLabel: {
        letterSpacing: '1em'
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
        this.setState({ [name]: value });
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
        const { classes, onLogin, onReset } = this.props;

        const avatar = <Avatar src={face} size={'large'} alt={'头像'} />;

        var passwordAdornment = <InputAdornment position="end">
            <IconButton
                onClick={this.handleShowPassword}
                onMouseDown={this.handleMouseDownPassword}>
                {this.state.showPassword
                    ? <VisibilityOff />
                    : <Visibility />}
            </IconButton>
        </InputAdornment>;

        return (
            <div className={classes.root}>
                <Card className={classes.card} raised={true} square={false}>
                    <CardHeader title={''} className={classes.header} avatar={avatar} />
                    <CardContent>
                        <FormControl>
                            <FormLabel>用户名</FormLabel>
                            <Input
                                type={'text'}
                                name={'username'}
                                value={this.state.username}
                                className={classes.input}
                                onChange={this.handleInputChange} />
                        </FormControl>
                        <FormControl>
                            <FormLabel><span className={classes.pwdLabel}>密</span>码</FormLabel>
                            <Input
                                type={this.state.showPassword
                                    ? 'text'
                                    : 'password'}
                                name={'password'}
                                value={this.state.password}
                                className={classes.input}
                                endAdornment={passwordAdornment}
                                onChange={this.handleInputChange} />
                        </FormControl>
                    </CardContent>
                    <CardActions className={classes.action}>
                        <Button color="primary" className={classes.button} onClick={onLogin.bind(this)}>登录</Button>
                        <Button className={classes.button} onClick={onReset.bind(this)}>清空</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Controller(Login, { styles: styles, controller: LoginController });